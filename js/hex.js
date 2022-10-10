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
        let r = hex.length - 1;
        const dec = hex.split('').map((value, index) => {
            if (Object.keys(HexDecConverter.hexLettersToDecimalTable).includes(value)) {
                r--;
                // @ts-ignore
                return Number.parseInt(HexDecConverter.hexLettersToDecimalTable[value]) * Math.pow(16, r + 1);
            }
            else {
                r--;
                return Number.parseInt(value) * Math.pow(16, r + 1);
            }
        });
        return dec.reduce((a, b) => a + b);
    }
    static DecimalToHex(dec) {
        let results = "";
        let remainder = 0;
        let numberToParse = dec;
        while (numberToParse > 0) {
            remainder = numberToParse % 16;
            numberToParse = Math.round(numberToParse / 16);
            if (HexDecConverter.decimalToHexLetters.has(remainder)) {
                results += HexDecConverter.decimalToHexLetters.get(remainder);
            }
            else {
                results += remainder;
            }
        }
        return results.split('').reverse().join('');
    }
}
