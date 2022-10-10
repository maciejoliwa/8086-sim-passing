import { Register } from './register.js';
const commandForm = document.querySelector('.command-form');
const saveDataButton = document.querySelector('.save-data');
class Application {
    registers = {
        "ax": new Register(),
        "bx": new Register(),
        "cx": new Register(),
        "dx": new Register()
    };
    saveData() {
        const axValue = document.querySelector('#ax').value;
        const bxValue = document.querySelector('#bx').value;
        const cxValue = document.querySelector('#cx').value;
        const dxValue = document.querySelector('#dx').value;
        this.registers.ax.storedHex = axValue;
        this.registers.bx.storedHex = bxValue;
        this.registers.cx.storedHex = cxValue;
        this.registers.dx.storedHex = dxValue;
    }
    executeCommand() {
        const chosenCommand = document.querySelector('#command-select').value;
        const destination = document.querySelector('#destination').value;
        const source = document.querySelector('#source').value;
        switch (chosenCommand) {
            case "mov":
                // @ts-ignore
                this.registers[destination].mov(this.registers[source], () => {
                    // @ts-ignore
                    document.querySelector(`#${destination}`).value = this.registers[source].valueHex;
                    console.log(this.registers);
                });
                break;
            default:
                break;
        }
    }
    constructor() {
        commandForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.executeCommand();
        });
        saveDataButton?.addEventListener('click', this.saveData.bind(this));
    }
}
new Application();
