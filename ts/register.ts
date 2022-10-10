import { HexDecConverter } from './hex.js';

export type RegisterName = "AX" | "BX" | "CX" | "DX"

export class Register {

  private storedValue: number = 0;
  private storedHexValue: string = "0000";
  private name: RegisterName = "AX";

  set value(newValue: number) {
    this.storedValue = newValue;
  }

  get value(): number {
    return this.storedValue;
  }

  set storedHex(newValue: string) {
    this.storedHexValue = newValue;
    this.storedValue = HexDecConverter.HexToDecimal(newValue);
  }

  get valueHex(): string {
    return HexDecConverter.DecimalToHex(this.storedValue);
  }

  public mov(otherRegister: Register, callback: Function) {
    this.value = otherRegister.value;
    this.storedHex = otherRegister.valueHex;
    callback();
  }

}