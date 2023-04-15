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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface GuardianStorageInterface extends utils.Interface {
  functions: {
    "addGuardian(address,address)": FunctionFragment;
    "changeThreshold(address,uint256)": FunctionFragment;
    "getGuardians(address)": FunctionFragment;
    "guardiansCount(address)": FunctionFragment;
    "isGuardian(address,address)": FunctionFragment;
    "revokeGuardian(address,address,address)": FunctionFragment;
    "threshold(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addGuardian"
      | "changeThreshold"
      | "getGuardians"
      | "guardiansCount"
      | "isGuardian"
      | "revokeGuardian"
      | "threshold"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addGuardian",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeThreshold",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGuardians",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "guardiansCount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isGuardian",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeGuardian",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "threshold",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGuardians",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "guardiansCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "threshold", data: BytesLike): Result;

  events: {};
}

export interface GuardianStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GuardianStorageInterface;

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
    addGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeThreshold(
      _wallet: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getGuardians(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    guardiansCount(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    revokeGuardian(
      _wallet: PromiseOrValue<string>,
      _prevGuardian: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    threshold(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  addGuardian(
    _wallet: PromiseOrValue<string>,
    _guardian: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeThreshold(
    _wallet: PromiseOrValue<string>,
    _threshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getGuardians(
    _wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  guardiansCount(
    _wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isGuardian(
    _wallet: PromiseOrValue<string>,
    _guardian: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  revokeGuardian(
    _wallet: PromiseOrValue<string>,
    _prevGuardian: PromiseOrValue<string>,
    _guardian: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  threshold(
    _wallet: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    addGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeThreshold(
      _wallet: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getGuardians(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    guardiansCount(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    revokeGuardian(
      _wallet: PromiseOrValue<string>,
      _prevGuardian: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    threshold(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    addGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeThreshold(
      _wallet: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getGuardians(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guardiansCount(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revokeGuardian(
      _wallet: PromiseOrValue<string>,
      _prevGuardian: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    threshold(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeThreshold(
      _wallet: PromiseOrValue<string>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getGuardians(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    guardiansCount(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isGuardian(
      _wallet: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revokeGuardian(
      _wallet: PromiseOrValue<string>,
      _prevGuardian: PromiseOrValue<string>,
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    threshold(
      _wallet: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}