import { HexDecConverter } from './hex.js';

export type RegisterName = "AX" | "BX" | "CX" | "DX"

export class Register {

  private storedValue: number = 0;
  private name: RegisterName = "AX";

  set value(newValue: number) {
    this.storedValue = newValue;
  }

  get value(): number {
    return this.storedValue;
  }

  get valueHex(): string {
    return HexDecConverter.DecimalToHex(this.storedValue);
  }

  public mov(otherRegister: Register, callback: Function) {
    const temporaryValueHolder = this.storedValue;
    this.value = otherRegister.value;
    otherRegister.value = temporaryValueHolder;
    callback();
  }

}