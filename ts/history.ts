export class CommandsHistory {

    private historyElement = document.querySelector('.history');
    private commands: string[] = [];

    constructor() {}

    private renderCommandElement(command: string) {
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

    public addCommand(command: string): void {
        this.commands.push(command);
        this.renderCommandElement(command);
    }


}