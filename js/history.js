export class CommandsHistory {
    historyElement = document.querySelector('.history');
    commands = [];
    constructor() { }
    renderCommandElement(command) {
        if (this.commands.length >= 10) {
            this.commands = [];
            if (this.historyElement) {
                this.historyElement.innerHTML = '';
            }
        }
        const p = document.createElement('p');
        p.textContent = command;
        this.historyElement?.appendChild(p);
    }
    addCommand(command) {
        this.commands.push(command);
        this.renderCommandElement(command);
    }
}
