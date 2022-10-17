import { HexDecConverter } from './hex.js';

export type RegisterName = "AX" | "BX" | "CX" | "DX"

export class Register {

    private value: number;
    private hexValue: string;

    get decimalValue(): number {
        return this.value;
    }

    get hexadecimalValue(): string {
        return this.hexValue;
    }

    set registerValue(newValue: number) {
        this.value = newValue;
        this.hexValue = HexDecConverter.DecimalToHex(newValue);
        console.log(this);
    }

    constructor() {
        this.value = 0;
        this.hexValue = HexDecConverter.DecimalToHex(0);
    }

    public mov(otherRegister: Register, callback: Function) {
        otherRegister.registerValue = this.value;
        this.registerValue = 0;
        callback();
    }

    public xchg(otherRegister: Register, callback: Function) {
        const temp = this.value;
        this.registerValue = otherRegister.decimalValue;
        otherRegister.registerValue = temp;

        callback();
    }

}