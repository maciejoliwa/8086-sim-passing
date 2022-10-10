export class Register {
    storedValue = 0;
    name = "AX";
    set value(newValue) {
        this.storedValue = newValue;
    }
    get value() {
        return this.storedValue;
    }
    mov(otherRegister, callback) {
        const temporaryValueHolder = this.storedValue;
        this.value = otherRegister.value;
        otherRegister.value = temporaryValueHolder;
        callback();
    }
}
