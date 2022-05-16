import { BaseContract, Contract } from './classes/Contract';
import {
  ConstructorOptions,
  FallthroughProvider,
} from './providers/FallthroughProvider';
import { JsonRpcProvider, jsonRpcProvider } from './providers/JsonRpcProvider';
import { tinyBig, TinyBig } from './shared/tiny-big/tiny-big';
import { BlockResponse, BlockTag, RPCBlock } from './types/Block.types';
import {
  ContractTypes,
  JSONABI,
  JSONABIArgument,
} from './types/Contract.types';
import { Network } from './types/Network.types';
import {
  BlockTransactionResponse,
  Log,
  RPCLog,
  RPCTransaction,
  RPCTransactionReceipt,
  TransactionReceipt,
  TransactionResponse,
} from './types/Transaction.types';
import { computeAddress } from './utils/compute-address';
import { computePublicKey } from './utils/compute-public-key';
import { etherToGwei } from './utils/ether-to-gwei';
import { etherToWei } from './utils/ether-to-wei';
import { gweiToEther } from './utils/gwei-to-ether';
import { hashMessage } from './utils/hash-message';
import { isAddress } from './utils/is-address';
import { splitSignature } from './utils/split-signature';
import { toChecksumAddress } from './utils/to-checksum-address';
import { toUtf8Bytes } from './utils/to-utf8-bytes';
import { weiToEther } from './utils/wei-to-ether';

export * from './utils/bytes';
export * from './utils/hash-message';
export * from './utils/keccak256';
export * from './utils/solidity-keccak256';
export {
  etherToWei,
  etherToGwei,
  isAddress,
  jsonRpcProvider,
  JsonRpcProvider,
  FallthroughProvider,
  tinyBig,
  toChecksumAddress,
  weiToEther,
  gweiToEther,
  hashMessage,
  splitSignature,
  toUtf8Bytes,
  computeAddress,
  computePublicKey,
  /* classes */
  Contract,
  TinyBig,
  /* types */
  BaseContract,
  BlockResponse,
  ContractTypes,
  JSONABI,
  JSONABIArgument,
  Network,
  TransactionResponse,
  RPCBlock,
  RPCTransaction,
  RPCTransactionReceipt,
  TransactionReceipt,
  BlockTag,
  RPCLog,
  Log,
  BlockTransactionResponse,
  ConstructorOptions,
};
