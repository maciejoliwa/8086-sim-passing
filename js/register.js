import { HexDecConverter } from './hex.js';
export class Register {
    storedValue = 0;
    storedHexValue = "0000";
    name = "AX";
    set value(newValue) {
        this.storedValue = newValue;
    }
    get value() {
        return this.storedValue;
    }
    set storedHex(newValue) {
        this.storedHexValue = newValue;
        this.storedValue = HexDecConverter.HexToDecimal(newValue);
    }
    get valueHex() {
        return HexDecConverter.DecimalToHex(this.storedValue);
    }
    mov(otherRegister, callback) {
        this.value = otherRegister.value;
        this.storedHex = otherRegister.valueHex;
        callback();
    }
}
