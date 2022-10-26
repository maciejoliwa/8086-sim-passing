import { HexDecConverter } from './hex.js';
export class Register {
    value;
    hexValue;
    get decimalValue() {
        return this.value;
    }
    get hexadecimalValue() {
        return this.hexValue;
    }
    set registerValue(newValue) {
        this.value = newValue;
        this.hexValue = HexDecConverter.DecimalToHex(newValue);
    }
    constructor() {
        this.value = 0;
        this.hexValue = HexDecConverter.DecimalToHex(0);
    }
    mov(otherRegister, callback) {
        if (otherRegister instanceof Register) {
            this.registerValue = otherRegister.decimalValue;
        }
        else {
            this.registerValue = otherRegister;
        }
        callback();
    }
    xchg(otherRegister, callback) {
        const temp = this.value;
        this.registerValue = otherRegister.decimalValue;
        otherRegister.registerValue = temp;
        callback();
    }
}
