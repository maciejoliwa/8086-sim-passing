export class HexDecConverter {
    static hexLettersToDecimalTable = {
        "A": 10,
        "B": 11,
        "C": 12,
        "D": 13,
        "E": 14,
        "F": 15
    };
    static decimalToHexLetters = new Map([
        [10, "A"],
        [11, "B"],
        [12, "C"],
        [13, "D"],
        [14, "E"],
        [15, "F"]
    ]);
    static HexToDecimal(hex) {
        return Number.parseInt(hex, 16);
    }
    static DecimalToHex(dec) {
        return dec.toString(16).toUpperCase();
    }
}
