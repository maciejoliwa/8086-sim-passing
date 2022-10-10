import { HexDecConverter } from './hex.js';
import { Register, RegisterName } from './register.js';

const commandForm = document.querySelector('.command-form');
const saveDataButton = document.querySelector('.save-data');

class Application {

  private registers = {
    "ax": new Register(),
    "bx": new Register(),
    "cx": new Register(),
    "dx": new Register()
  }

  saveData() {
    const axValue =  (document.querySelector('#ax') as HTMLSelectElement).value;
    const bxValue =  (document.querySelector('#bx') as HTMLSelectElement).value;
    const cxValue =  (document.querySelector('#cx') as HTMLSelectElement).value;
    const dxValue =  (document.querySelector('#dx') as HTMLSelectElement).value;

    this.registers.ax.storedHex = axValue;
    this.registers.bx.storedHex = bxValue;
    this.registers.cx.storedHex = cxValue;
    this.registers.dx.storedHex = dxValue;
  }

  executeCommand() {
    const chosenCommand = (document.querySelector('#command-select') as HTMLSelectElement).value;
    const destination = (document.querySelector('#destination') as HTMLSelectElement).value;
    const source = (document.querySelector('#source') as HTMLSelectElement).value;

    switch (chosenCommand) {
      case "mov":
        // @ts-ignore
        this.registers[destination].mov(this.registers[source], () => {
          // @ts-ignore
          document.querySelector(`#${destination}`).value = this.registers[source].valueHex;
          console.log(this.registers);
        });
        break;

      case "xchg":
        //@ts-ignore
        this.registers[destination].xchg(this.registers[source], () => {
          // @ts-ignore
          document.querySelector(`#${destination}`).value = this.registers[source].valueHex;
          // @ts-ignore
          document.querySelector(`#${source}`).value = this.registers[destination].valueHex;
        })
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