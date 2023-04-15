/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace SocialRecoveryModule {
  export type RecoveryRequestStruct = {
    guardiansApprovalCount: PromiseOrValue<BigNumberish>;
    newThreshold: PromiseOrValue<BigNumberish>;
    executeAfter: PromiseOrValue<BigNumberish>;
    newOwners: PromiseOrValue<string>[];
  };

  export type RecoveryRequestStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    string[]
  ] & {
    guardiansApprovalCount: BigNumber;
    newThreshold: BigNumber;
    executeAfter: BigNumber;
    newOwners: string[];
  };

  export type SignatureDataStruct = {
    signer: PromiseOrValue<string>;
    signature: PromiseOrValue<BytesLike>;
  };

  export type SignatureDataStructOutput = [string, string] & {
    signer: string;
    signature: string;
  };
}

export interface SocialRecoveryModuleInterface extends utils.Interface {
  functions: {
    "NAME()": FunctionFragment;
    "VERSION()": FunctionFragment;
    "addGuardianWithThreshold(address,address,uint256)": FunctionFragment;
    "cancelRecovery(address)": FunctionFragment;
    "changeThreshold(address,uint256)": FunctionFragment;
    "confirmRecovery(address,address[],uint256,bool)": FunctionFragment;
    "domainSeparator()": FunctionFragment;
    "encodeRecoveryData(address,address[],uint256,uint256)": FunctionFragment;
    "executeRecovery(address,address[],uint256)": FunctionFragment;
    "finalizeRecovery(address)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getGuardians(address)": FunctionFragment;
    "getRecoveryApprovals(address,address[],uint256)": FunctionFragment;
    "getRecoveryHash(address,address[],uint256,uint256)": FunctionFragment;
    "getRecoveryRequest(address)": FunctionFragment;
    "guardiansCount(address)": FunctionFragment;
    "hasGuardianApproved(address,address,address[],uint256)": FunctionFragment;
    "isGuardian(address,address)": FunctionFragment;
    "multiConfirmRecovery(address,address[],uint256,(address,bytes)[],bool)": FunctionFragment;
    "nonce(address)": FunctionFragment;
    "revokeGuardianWithThreshold(address,address,address,uint256)": FunctionFragment;
    "threshold(address)": FunctionFragment;
    "validateGuardianSignature(address,bytes32,address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "NAME"
      | "VERSION"
      | "addGuardianWithThreshold"
      | "cancelRecovery"
      | "changeThreshold"
      | "confirmRecovery"
      | "domainSeparator"
      | "encodeRecoveryData"
      | "executeRecovery"
      | "finalizeRecovery"
      | "getChainId"
      | "getGuardians"
      | "getRecoveryApprovals"
      | "getRecoveryHash"
      | "getRecoveryRequest"
      | "guardiansCount"
      | "hasGuardianApproved"
      | "isGuardian"
      | "multiConfirmRecovery"
      | "nonce"
      | "revokeGuardianWithThreshold"
      | "threshold"
      | "validateGuardianSignature"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addGuardianWithThreshold",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelRecovery",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeThreshold",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmRecovery",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "domainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "encodeRecoveryData",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeRecovery",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeRecovery",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGuardians",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveryApprovals",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveryHash",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRecoveryRequest",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "guardiansCount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "hasGuardianApproved",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isGuardian",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "multiConfirmRecovery",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      SocialRecoveryModule.SignatureDataStruct[],
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "nonce",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeGuardianWithThreshold",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "threshold",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateGuardianSignature",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addGuardianWithThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelRecovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmRecovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "domainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeRecoveryData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeRecovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeRecovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGuardians",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveryApprovals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveryHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRecoveryRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "guardiansCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasGuardianApproved",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multiConfirmRecovery",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeGuardianWithThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "threshold", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateGuardianSignature",
    data: BytesLike
  ): Result;

  events: {
    "GuardianAdded(address,address,uint256)": EventFragment;
    "GuardianRevoked(address,address,uint256)": EventFragment;
    "RecoveryCanceled(address,uint256)": EventFragment;
    "RecoveryExecuted(address,address[],uint256,uint256,uint64,uint256)": EventFragment;
    "RecoveryFinalized(address,address[],uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GuardianAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GuardianRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecoveryCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecoveryExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RecoveryFinalized"): EventFragment;
}

export interface GuardianAddedEventObject {
  wallet: string;
  guardian: string;
  threshold: BigNumber;
}
export type GuardianAddedEvent = TypedEvent<
  [string, string, BigNumber],
  GuardianAddedEventObject
>;

export type GuardianAddedEventFilter = TypedEventFilter<GuardianAddedEvent>;

export interface GuardianRevokedEventObject {
  wallet: string;
  guardian: string;
  threshold: BigNumber;
}
export type GuardianRevokedEvent = TypedEvent<
  [string, string, BigNumber],
  GuardianRevokedEventObject
>;

export type GuardianRevokedEventFilter = TypedEventFilter<GuardianRevokedEvent>;

export interface RecoveryCanceledEventObject {
  wallet: string;
  nonce: BigNumber;
}
export type RecoveryCanceledEvent = TypedEvent<
  [string, BigNumber],
  RecoveryCanceledEventObject
>;

export type RecoveryCanceledEventFilter =
  TypedEventFilter<RecoveryCanceledEvent>;

export interface RecoveryExecutedEventObject {
  wallet: string;
  newOwners: string[];
  newThreshold: BigNumber;
  nonce: BigNumber;
  executeAfter: BigNumber;
  guardiansApprovalCount: BigNumber;
}
export type RecoveryExecutedEvent = TypedEvent<
  [string, string[], BigNumber, BigNumber, BigNumber, BigNumber],
  RecoveryExecutedEventObject
>;

export type RecoveryExecutedEventFilter =
  TypedEventFilter<RecoveryExecutedEvent>;

export interface RecoveryFinalizedEventObject {
  wallet: string;
  newOwners: string[];
  newThreshold: BigNumber;
  nonce: BigNumber;
}
export type RecoveryFinalizedEvent = TypedEvent<
  [string, string[], BigNumber, BigNumber],
  RecoveryFinalizedEventObject
>;

export type RecoveryFinalizedEventFilter =
  TypedEventFilter<RecoveryFinalizedEvent>;

export interface SocialRecoveryModule extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SocialRecoveryModuleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    NAME(overrides?: CallOverrides): Promise<[string]>;

    VERSION(overrides?: CallOverrides): Promise<[string]>;

    addGuardianWithThreshold(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelRecovery(
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeThreshold(
      _wallet: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    confirmRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _execute: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    domainSeparator(overrides?: CallOverrides): Promise<[string]>;

    encodeRecoveryData(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    executeRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeRecovery(
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    getGuardians(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { _guardians: string[] }>;

    getRecoveryApprovals(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { approvalCount: BigNumber }>;

    getRecoveryHash(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRecoveryRequest(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [SocialRecoveryModule.RecoveryRequestStructOutput] & {
        request: SocialRecoveryModule.RecoveryRequestStructOutput;
      }
    >;

    guardiansCount(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _count: BigNumber }>;

    hasGuardianApproved(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _isGuardian: boolean }>;

    multiConfirmRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _signatures: SocialRecoveryModule.SignatureDataStruct[],
      _execute: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nonce(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _nonce: BigNumber }>;

    revokeGuardianWithThreshold(
      _wallet: PromiseOrValue<string>,
      _prevGuardian: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    threshold(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _threshold: BigNumber }>;

    validateGuardianSignature(
      _wallet: PromiseOrValue<string>,
      _signHash: PromiseOrValue<BytesLike>,
      _signer: PromiseOrValue<string>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  NAME(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  addGuardianWithThreshold(
    _wallet: PromiseOrValue<string>,
    _guardian: PromiseOrValue<string>,
    _threshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelRecovery(
    _wallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeThreshold(
    _wallet: PromiseOrValue<string>,
    _threshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  confirmRecovery(
    _wallet: PromiseOrValue<string>,
    _newOwners: PromiseOrValue<string>[],
    _newThreshold: PromiseOrValue<BigNumberish>,
    _execute: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  domainSeparator(overrides?: CallOverrides): Promise<string>;

  encodeRecoveryData(
    _wallet: PromiseOrValue<string>,
    _newOwners: PromiseOrValue<string>[],
    _newThreshold: PromiseOrValue<BigNumberish>,
    _nonce: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  executeRecovery(
    _wallet: PromiseOrValue<string>,
    _newOwners: PromiseOrValue<string>[],
    _newThreshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeRecovery(
    _wallet: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getChainId(overrides?: CallOverrides): Promise<BigNumber>;

  getGuardians(
    _wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getRecoveryApprovals(
    _wallet: PromiseOrValue<string>,
    _newOwners: PromiseOrValue<string>[],
    _newThreshold: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRecoveryHash(
    _wallet: PromiseOrValue<string>,
    _newOwners: PromiseOrValue<string>[],
    _newThreshold: PromiseOrValue<BigNumberish>,
    _nonce: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getRecoveryRequest(
    _wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<SocialRecoveryModule.RecoveryRequestStructOutput>;

  guardiansCount(
    _wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hasGuardianApproved(
    _wallet: PromiseOrValue<string>,
    _guardian: PromiseOrValue<string>,
    _newOwners: PromiseOrValue<string>[],
    _newThreshold: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isGuardian(
    _wallet: PromiseOrValue<string>,
    _guardian: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  multiConfirmRecovery(
    _wallet: PromiseOrValue<string>,
    _newOwners: PromiseOrValue<string>[],
    _newThreshold: PromiseOrValue<BigNumberish>,
    _signatures: SocialRecoveryModule.SignatureDataStruct[],
    _execute: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nonce(
    _wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  revokeGuardianWithThreshold(
    _wallet: PromiseOrValue<string>,
    _prevGuardian: PromiseOrValue<string>,
    _guardian: PromiseOrValue<string>,
    _threshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  threshold(
    _wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  validateGuardianSignature(
    _wallet: PromiseOrValue<string>,
    _signHash: PromiseOrValue<BytesLike>,
    _signer: PromiseOrValue<string>,
    _signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    NAME(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    addGuardianWithThreshold(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelRecovery(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeThreshold(
      _wallet: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    confirmRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _execute: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    domainSeparator(overrides?: CallOverrides): Promise<string>;

    encodeRecoveryData(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    executeRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeRecovery(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getGuardians(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getRecoveryApprovals(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRecoveryHash(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getRecoveryRequest(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<SocialRecoveryModule.RecoveryRequestStructOutput>;

    guardiansCount(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasGuardianApproved(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    multiConfirmRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _signatures: SocialRecoveryModule.SignatureDataStruct[],
      _execute: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    nonce(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revokeGuardianWithThreshold(
      _wallet: PromiseOrValue<string>,
      _prevGuardian: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    threshold(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateGuardianSignature(
      _wallet: PromiseOrValue<string>,
      _signHash: PromiseOrValue<BytesLike>,
      _signer: PromiseOrValue<string>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "GuardianAdded(address,address,uint256)"(
      wallet?: PromiseOrValue<string> | null,
      guardian?: PromiseOrValue<string> | null,
      threshold?: null
    ): GuardianAddedEventFilter;
    GuardianAdded(
      wallet?: PromiseOrValue<string> | null,
      guardian?: PromiseOrValue<string> | null,
      threshold?: null
    ): GuardianAddedEventFilter;

    "GuardianRevoked(address,address,uint256)"(
      wallet?: PromiseOrValue<string> | null,
      guardian?: PromiseOrValue<string> | null,
      threshold?: null
    ): GuardianRevokedEventFilter;
    GuardianRevoked(
      wallet?: PromiseOrValue<string> | null,
      guardian?: PromiseOrValue<string> | null,
      threshold?: null
    ): GuardianRevokedEventFilter;

    "RecoveryCanceled(address,uint256)"(
      wallet?: PromiseOrValue<string> | null,
      nonce?: null
    ): RecoveryCanceledEventFilter;
    RecoveryCanceled(
      wallet?: PromiseOrValue<string> | null,
      nonce?: null
    ): RecoveryCanceledEventFilter;

    "RecoveryExecuted(address,address[],uint256,uint256,uint64,uint256)"(
      wallet?: PromiseOrValue<string> | null,
      newOwners?: PromiseOrValue<string>[] | null,
      newThreshold?: null,
      nonce?: null,
      executeAfter?: null,
      guardiansApprovalCount?: null
    ): RecoveryExecutedEventFilter;
    RecoveryExecuted(
      wallet?: PromiseOrValue<string> | null,
      newOwners?: PromiseOrValue<string>[] | null,
      newThreshold?: null,
      nonce?: null,
      executeAfter?: null,
      guardiansApprovalCount?: null
    ): RecoveryExecutedEventFilter;

    "RecoveryFinalized(address,address[],uint256,uint256)"(
      wallet?: PromiseOrValue<string> | null,
      newOwners?: PromiseOrValue<string>[] | null,
      newThreshold?: null,
      nonce?: null
    ): RecoveryFinalizedEventFilter;
    RecoveryFinalized(
      wallet?: PromiseOrValue<string> | null,
      newOwners?: PromiseOrValue<string>[] | null,
      newThreshold?: null,
      nonce?: null
    ): RecoveryFinalizedEventFilter;
  };

  estimateGas: {
    NAME(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    addGuardianWithThreshold(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cancelRecovery(
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeThreshold(
      _wallet: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    confirmRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _execute: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    encodeRecoveryData(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalizeRecovery(
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getGuardians(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRecoveryApprovals(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRecoveryHash(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRecoveryRequest(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guardiansCount(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasGuardianApproved(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multiConfirmRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _signatures: SocialRecoveryModule.SignatureDataStruct[],
      _execute: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nonce(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revokeGuardianWithThreshold(
      _wallet: PromiseOrValue<string>,
      _prevGuardian: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    threshold(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateGuardianSignature(
      _wallet: PromiseOrValue<string>,
      _signHash: PromiseOrValue<BytesLike>,
      _signer: PromiseOrValue<string>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addGuardianWithThreshold(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelRecovery(
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeThreshold(
      _wallet: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    confirmRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _execute: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    encodeRecoveryData(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeRecovery(
      _wallet: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGuardians(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecoveryApprovals(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecoveryHash(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _nonce: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRecoveryRequest(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    guardiansCount(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasGuardianApproved(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multiConfirmRecovery(
      _wallet: PromiseOrValue<string>,
      _newOwners: PromiseOrValue<string>[],
      _newThreshold: PromiseOrValue<BigNumberish>,
      _signatures: SocialRecoveryModule.SignatureDataStruct[],
      _execute: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nonce(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revokeGuardianWithThreshold(
      _wallet: PromiseOrValue<string>,
      _prevGuardian: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    threshold(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateGuardianSignature(
      _wallet: PromiseOrValue<string>,
      _signHash: PromiseOrValue<BytesLike>,
      _signer: PromiseOrValue<string>,
      _signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}