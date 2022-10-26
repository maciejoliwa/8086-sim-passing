var CommandType;
(function (CommandType) {
    CommandType[CommandType["MOV"] = 0] = "MOV";
    CommandType[CommandType["XCHG"] = 1] = "XCHG";
})(CommandType || (CommandType = {}));
export class CommandParser {
    registers;
    form;
    executeCommand(command) {
        switch (command.type) {
            case CommandType.MOV:
                if (typeof command.parameters.right === 'string') {
                    this.registers[command.parameters.left].mov(this.registers[command.parameters.right], () => {
                        // @ts-ignore
                        document.querySelector(`#${command.parameters.left}`).value = this.registers[command.parameters.left].hexadecimalValue;
                        // @ts-ignore
                        document.querySelector(`#${command.parameters.right}`).value = this.registers[command.parameters.right].hexadecimalValue;
                    });
                }
                else {
                    this.registers[command.parameters.left].mov(command.parameters.right, () => {
                        // @ts-ignore
                        document.querySelector(`#${command.parameters.left}`).value = this.registers[command.parameters.left].hexadecimalValue;
                    });
                }
                break;
            default:
                break;
        }
    }
    parseCommand(input) {
        const split = input.toLowerCase().split(' ');
        let command = CommandType.MOV;
        switch (split[0]) {
            case "mov":
                command = CommandType.MOV;
                break;
            case "xchg":
                command = CommandType.XCHG;
                break;
            default:
                console.error("no");
                break;
        }
        const rightSide = split[1].split(',');
        const leftsideoftherightside = rightSide[0];
        const source = rightSide[1];
        let rSide = source;
        if (source !== "ax" && source !== "bx" && source !== "cx" && source !== "dx") {
            let n = Number.parseInt(source, 16);
            rSide = Number.isNaN(n) ? source : n;
        }
        return {
            type: command,
            parameters: {
                left: leftsideoftherightside,
                right: rSide
            }
        };
    }
    constructor(regs) {
        this.form = document.querySelector('.commands-form');
        this.registers = regs;
        if (this.form) {
            this.form.addEventListener('submit', e => {
                e.preventDefault();
                // @ts-ignore
                const value = this.form[0].value;
                this.executeCommand(this.parseCommand(value));
            });
        }
    }
}
