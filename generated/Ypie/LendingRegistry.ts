// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ProtocolToLogicSet extends ethereum.Event {
  get params(): ProtocolToLogicSet__Params {
    return new ProtocolToLogicSet__Params(this);
  }
}

export class ProtocolToLogicSet__Params {
  _event: ProtocolToLogicSet;

  constructor(event: ProtocolToLogicSet) {
    this._event = event;
  }

  get protocol(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get logic(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class UnderlyingToProtocolWrappedSet extends ethereum.Event {
  get params(): UnderlyingToProtocolWrappedSet__Params {
    return new UnderlyingToProtocolWrappedSet__Params(this);
  }
}

export class UnderlyingToProtocolWrappedSet__Params {
  _event: UnderlyingToProtocolWrappedSet;

  constructor(event: UnderlyingToProtocolWrappedSet) {
    this._event = event;
  }

  get underlying(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get protocol(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get wrapped(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class WrappedToProtocolSet extends ethereum.Event {
  get params(): WrappedToProtocolSet__Params {
    return new WrappedToProtocolSet__Params(this);
  }
}

export class WrappedToProtocolSet__Params {
  _event: WrappedToProtocolSet;

  constructor(event: WrappedToProtocolSet) {
    this._event = event;
  }

  get wrapped(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get protocol(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class WrappedToUnderlyingSet extends ethereum.Event {
  get params(): WrappedToUnderlyingSet__Params {
    return new WrappedToUnderlyingSet__Params(this);
  }
}

export class WrappedToUnderlyingSet__Params {
  _event: WrappedToUnderlyingSet;

  constructor(event: WrappedToUnderlyingSet) {
    this._event = event;
  }

  get wrapped(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get underlying(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LendingRegistry__getLendTXDataResult {
  value0: Array<Address>;
  value1: Array<Bytes>;

  constructor(value0: Array<Address>, value1: Array<Bytes>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromBytesArray(this.value1));
    return map;
  }
}

export class LendingRegistry__getUnlendTXDataResult {
  value0: Array<Address>;
  value1: Array<Bytes>;

  constructor(value0: Array<Address>, value1: Array<Bytes>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddressArray(this.value0));
    map.set("value1", ethereum.Value.fromBytesArray(this.value1));
    return map;
  }
}

export class LendingRegistry extends ethereum.SmartContract {
  static bind(address: Address): LendingRegistry {
    return new LendingRegistry("LendingRegistry", address);
  }

  getLendTXData(
    _underlying: Address,
    _amount: BigInt,
    _protocol: Bytes
  ): LendingRegistry__getLendTXDataResult {
    let result = super.call(
      "getLendTXData",
      "getLendTXData(address,uint256,bytes32):(address[],bytes[])",
      [
        ethereum.Value.fromAddress(_underlying),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromFixedBytes(_protocol)
      ]
    );

    return new LendingRegistry__getLendTXDataResult(
      result[0].toAddressArray(),
      result[1].toBytesArray()
    );
  }

  try_getLendTXData(
    _underlying: Address,
    _amount: BigInt,
    _protocol: Bytes
  ): ethereum.CallResult<LendingRegistry__getLendTXDataResult> {
    let result = super.tryCall(
      "getLendTXData",
      "getLendTXData(address,uint256,bytes32):(address[],bytes[])",
      [
        ethereum.Value.fromAddress(_underlying),
        ethereum.Value.fromUnsignedBigInt(_amount),
        ethereum.Value.fromFixedBytes(_protocol)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LendingRegistry__getLendTXDataResult(
        value[0].toAddressArray(),
        value[1].toBytesArray()
      )
    );
  }

  getUnlendTXData(
    _wrapped: Address,
    _amount: BigInt
  ): LendingRegistry__getUnlendTXDataResult {
    let result = super.call(
      "getUnlendTXData",
      "getUnlendTXData(address,uint256):(address[],bytes[])",
      [
        ethereum.Value.fromAddress(_wrapped),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );

    return new LendingRegistry__getUnlendTXDataResult(
      result[0].toAddressArray(),
      result[1].toBytesArray()
    );
  }

  try_getUnlendTXData(
    _wrapped: Address,
    _amount: BigInt
  ): ethereum.CallResult<LendingRegistry__getUnlendTXDataResult> {
    let result = super.tryCall(
      "getUnlendTXData",
      "getUnlendTXData(address,uint256):(address[],bytes[])",
      [
        ethereum.Value.fromAddress(_wrapped),
        ethereum.Value.fromUnsignedBigInt(_amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new LendingRegistry__getUnlendTXDataResult(
        value[0].toAddressArray(),
        value[1].toBytesArray()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  protocolToLogic(param0: Bytes): Address {
    let result = super.call(
      "protocolToLogic",
      "protocolToLogic(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toAddress();
  }

  try_protocolToLogic(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "protocolToLogic",
      "protocolToLogic(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  underlyingToProtocolWrapped(param0: Address, param1: Bytes): Address {
    let result = super.call(
      "underlyingToProtocolWrapped",
      "underlyingToProtocolWrapped(address,bytes32):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_underlyingToProtocolWrapped(
    param0: Address,
    param1: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "underlyingToProtocolWrapped",
      "underlyingToProtocolWrapped(address,bytes32):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromFixedBytes(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  wrappedToProtocol(param0: Address): Bytes {
    let result = super.call(
      "wrappedToProtocol",
      "wrappedToProtocol(address):(bytes32)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBytes();
  }

  try_wrappedToProtocol(param0: Address): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "wrappedToProtocol",
      "wrappedToProtocol(address):(bytes32)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  wrappedToUnderlying(param0: Address): Address {
    let result = super.call(
      "wrappedToUnderlying",
      "wrappedToUnderlying(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_wrappedToUnderlying(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "wrappedToUnderlying",
      "wrappedToUnderlying(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetProtocolToLogicCall extends ethereum.Call {
  get inputs(): SetProtocolToLogicCall__Inputs {
    return new SetProtocolToLogicCall__Inputs(this);
  }

  get outputs(): SetProtocolToLogicCall__Outputs {
    return new SetProtocolToLogicCall__Outputs(this);
  }
}

export class SetProtocolToLogicCall__Inputs {
  _call: SetProtocolToLogicCall;

  constructor(call: SetProtocolToLogicCall) {
    this._call = call;
  }

  get _protocol(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _logic(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetProtocolToLogicCall__Outputs {
  _call: SetProtocolToLogicCall;

  constructor(call: SetProtocolToLogicCall) {
    this._call = call;
  }
}

export class SetUnderlyingToProtocolWrappedCall extends ethereum.Call {
  get inputs(): SetUnderlyingToProtocolWrappedCall__Inputs {
    return new SetUnderlyingToProtocolWrappedCall__Inputs(this);
  }

  get outputs(): SetUnderlyingToProtocolWrappedCall__Outputs {
    return new SetUnderlyingToProtocolWrappedCall__Outputs(this);
  }
}

export class SetUnderlyingToProtocolWrappedCall__Inputs {
  _call: SetUnderlyingToProtocolWrappedCall;

  constructor(call: SetUnderlyingToProtocolWrappedCall) {
    this._call = call;
  }

  get _underlying(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _protocol(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _wrapped(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class SetUnderlyingToProtocolWrappedCall__Outputs {
  _call: SetUnderlyingToProtocolWrappedCall;

  constructor(call: SetUnderlyingToProtocolWrappedCall) {
    this._call = call;
  }
}

export class SetWrappedToProtocolCall extends ethereum.Call {
  get inputs(): SetWrappedToProtocolCall__Inputs {
    return new SetWrappedToProtocolCall__Inputs(this);
  }

  get outputs(): SetWrappedToProtocolCall__Outputs {
    return new SetWrappedToProtocolCall__Outputs(this);
  }
}

export class SetWrappedToProtocolCall__Inputs {
  _call: SetWrappedToProtocolCall;

  constructor(call: SetWrappedToProtocolCall) {
    this._call = call;
  }

  get _wrapped(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _protocol(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SetWrappedToProtocolCall__Outputs {
  _call: SetWrappedToProtocolCall;

  constructor(call: SetWrappedToProtocolCall) {
    this._call = call;
  }
}

export class SetWrappedToUnderlyingCall extends ethereum.Call {
  get inputs(): SetWrappedToUnderlyingCall__Inputs {
    return new SetWrappedToUnderlyingCall__Inputs(this);
  }

  get outputs(): SetWrappedToUnderlyingCall__Outputs {
    return new SetWrappedToUnderlyingCall__Outputs(this);
  }
}

export class SetWrappedToUnderlyingCall__Inputs {
  _call: SetWrappedToUnderlyingCall;

  constructor(call: SetWrappedToUnderlyingCall) {
    this._call = call;
  }

  get _wrapped(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _underlying(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetWrappedToUnderlyingCall__Outputs {
  _call: SetWrappedToUnderlyingCall;

  constructor(call: SetWrappedToUnderlyingCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
