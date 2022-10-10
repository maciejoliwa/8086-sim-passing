export class HexDecConverter {

  static hexLettersToDecimalTable = {
    "A": 10,
    "B": 11,
    "C": 12,
    "D": 13,
    "E": 14,
    "F": 15
  }

  static decimalToHexLetters = new Map<number, string>([
    [10, "A"],
    [11, "B"],
    [12, "C"],
    [13, "D"],
    [14, "E"],
    [15, "F"]
  ]);

  public static HexToDecimal(hex: string): number {
    console.log(hex);
    return Number.parseInt(hex, 16);
  } 

  public static DecimalToHex(dec: number): string {
    return dec.toString(16).toUpperCase();
  }

} 