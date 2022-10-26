import { HexDecConverter } from './hex.js';
import { Register } from './register.js';
const commandForm = document.querySelector('.command-form');
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
        this.registers.ax.registerValue = HexDecConverter.HexToDecimal(axValue);
        this.registers.bx.registerValue = HexDecConverter.HexToDecimal(bxValue);
        this.registers.cx.registerValue = HexDecConverter.HexToDecimal(cxValue);
        this.registers.dx.registerValue = HexDecConverter.HexToDecimal(dxValue);
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
                    document.querySelector(`#${destination}`).value = this.registers[destination].hexadecimalValue;
                    // @ts-ignore
                    document.querySelector(`#${source}`).value = this.registers[source].hexadecimalValue;
                });
                break;
            case 'xchg':
                // @ts-ignore
                this.registers[destination].xchg(this.registers[source], () => {
                    // @ts-ignore
                    document.querySelector(`#${destination}`).value = this.registers[destination].hexadecimalValue;
                    // @ts-ignore
                    document.querySelector(`#${source}`).value = this.registers[source].hexadecimalValue;
                });
            default:
                break;
        }
    }
    constructor() {
        commandForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.executeCommand();
        });
        document.querySelector('#ax')?.addEventListener('keyup', this.saveData.bind(this));
        document.querySelector('#bx')?.addEventListener('keyup', this.saveData.bind(this));
        document.querySelector('#cx')?.addEventListener('keyup', this.saveData.bind(this));
        document.querySelector('#dx')?.addEventListener('keyup', this.saveData.bind(this));
    }
}
new Application();
