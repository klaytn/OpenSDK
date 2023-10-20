import Web3, {Bytes, Web3Context} from "web3";
import { DataFormat, DEFAULT_RETURN_FORMAT } from "web3-types";
import { SendTransactionOptions } from "web3-eth";
import _ from "lodash";

import { klay_sendSignedTransaction } from "./send_transaction";
import { initAccountsForContext } from "./account";

// @ts-ignore: package @klaytn/web3rpc has no .d.ts file.
import { ApiClient, AdminApi, DebugApi, GovernanceApi, KlayApi, NetApi, PersonalApi, TxpoolApi } from "@klaytn/web3rpc";

import { ConnectionInfo } from "@ethersproject/web";

// NamespaceApi classes generated by openapi-generator-javascript.
type OpenApiMethod = (...args: any[]) => any;
declare class OpenApi {
  constructor(apiClient: any);
  [method: string]: OpenApiMethod;
}
interface OpenApiClass {
  new (apiClient: any): OpenApi;
}

export class KlaytnWeb3 extends Web3 {
  openApiClient: any;

  constructor(provider: any) {
    // TODO: Override default values to fit Klaytn network.
    // transactionSendTimeout = 50*1000

    // The Web3 constructor. See web3/src/web3.ts
    super(provider);

    // web3.eth.accounts methods are bound to 'this' object.
    const accounts = initAccountsForContext(this);

    this.eth.accounts = accounts;
    this._accountProvider = accounts;
    this._wallet = accounts.wallet;

    // Override web3.eth RPC method wrappers. See web3-eth/src/web3_eth.ts:Web3Eth
    // Note that web3.eth methods should simply call eth_ RPCs to Klaytn node,
    // except a few methods below which call klay_ RPCs despite its name 'web3.eth'.
    this.eth.getProtocolVersion = this.eth_getProtocolVersion(this);
    this.eth.sendSignedTransaction = this.eth_sendSignedTransaction(this);
    
    // TODO: Connect web3.klay, web3.net, etc from @klaytn/web3rpc
    this.openApiClient = makeApiClient(provider.clientUrl);
  }
        
  /* eslint-disable no-multi-spaces */
  get admin(): AsyncOpenApi      { return this.getAsyncOpenApi(AdminApi); }
  get debug(): AsyncOpenApi      { return this.getAsyncOpenApi(DebugApi); }
  get governance(): AsyncOpenApi { return this.getAsyncOpenApi(GovernanceApi); }
  get klay(): AsyncOpenApi       { return this.getAsyncOpenApi(KlayApi); }
  get net(): AsyncOpenApi        { return this.getAsyncOpenApi(NetApi); }
  get personal(): AsyncOpenApi   { return this.getAsyncOpenApi(PersonalApi); }
  get txpool(): AsyncOpenApi      { return this.getAsyncOpenApi(TxpoolApi); }
  /* eslint-enable no-multi-spaces */

  getAsyncOpenApi(clazz: OpenApiClass): AsyncOpenApi {
    return new AsyncOpenApi(new clazz(this.openApiClient));
  }

  eth_getProtocolVersion(context: Web3Context): typeof this.eth.getProtocolVersion {
    // See web3-eth/src/web3_eth.ts:Web3Eth
    // See web3-rpc-methods/src/eth_rpc_methods.ts
    return async (): Promise<string> => {
      return context.requestManager.send({
        method: "klay_protocolVersion",
        params: [],
      })
    }
  }

  eth_sendSignedTransaction(context: Web3Context): typeof this.eth.sendSignedTransaction {
    // See web3-eth/src/web3_eth.ts:Web3Eth
    // @ts-ignore: TODO: fix typing
    return async<ReturnFormat extends DataFormat = typeof DEFAULT_RETURN_FORMAT> (
      transaction: Bytes,
      returnFormat: ReturnFormat = DEFAULT_RETURN_FORMAT as ReturnFormat,
      options?: SendTransactionOptions) => {
        // TODO: use klay_sendRawTransaction
        return klay_sendSignedTransaction(context, transaction, returnFormat, options)
      }
  }
}


// Make OpenAPI-Generator ApiClient from ConnectionInfo
function makeApiClient(url: string, opts?: RequestInit)
  if (_.isString(url)) {
    return new ApiClient(url);
  }

  // Transplant ethers ConnectionInfo settings to OpenAPI ApiClient settings.
  // Some ConnectionInfo settings are sliently ignored.
  // See https://github.com/ethers-io/ethers.js/blob/v5/packages/web/src.ts/index.ts#L97:_fetchData
  // See https://github.com/klaytn/web3klaytn/blob/dev/web3rpc/sdk/client/javascript/template/libraries/javascript/ApiClient.mustache
  const conn = url as ConnectionInfo;
  const client = new ApiClient(conn.url);

  if (conn.user && conn.password) {
    client.authentications = {
      "basic": {
        username: conn.user,
        password: conn.password,
      }
    };
  }
  if (_.isNumber(conn.timeout)) {
    // Both timeouts are in milliseconds.
    client.timeout = conn.timeout;
  }
  if (conn.headers) {
    _.forOwn(conn.headers, (value, key) => {
      client.defaultHeaders[key] = value;
    });
  }

  return client;
}


// A wrapper to OpenApi class where all its methods are promisified.
class AsyncOpenApi {
  openApi: any;
  [method: string | symbol]: OpenApiMethod; // dynamically generated methods

  constructor(openApi: any) {
    this.openApi = openApi;
    this._promisifyApi();
  }

  _promisifyApi() {
    const proto = Reflect.getPrototypeOf(this.openApi);
    if (proto) {
      const methods = Reflect.ownKeys(proto);
      // Promisify each methods
      _.forEach(methods, (methodName) => {
        // Assume that the prototype only has a constructor and API methods.
        if (methodName == "constructor") {
          return;
        }

        const method: OpenApiMethod = this.openApi[methodName];
        // Function.length is the number of function arguments.
        // RPC args = method args - opts - callback
        const numArgs = method.length - 2;

        this[methodName] = async (...args: any[]): Promise<any> => {
          return this._asyncCall(methodName, numArgs, ...args);
        };
      });
    }
  }

  async _asyncCall(name: string | symbol, numArgs: number, ...args: any[]) {
    const opts = {};
    if (args.length != numArgs) {
      throw new Error(`RPC ${String(name)} requires ${numArgs} parameters, ${args.length} given`);
    }

    return new Promise((resolve, reject) => {
      this.openApi[name](...args, opts, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
