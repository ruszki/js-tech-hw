export default class CeasarCoding {
  public static readonly UpperCaseBaseCharacterCode:
    | number
    | undefined = 'A'.codePointAt(0);
  public static readonly LowerCaseBaseCharacterCode:
    | number
    | undefined = 'a'.codePointAt(0);
  public static readonly UpperCaseMaximumCharacterCode:
    | number
    | undefined = 'Z'.codePointAt(0);
  public static readonly LowerCaseMaximumCharacterCode:
    | number
    | undefined = 'z'.codePointAt(0);

  public static encrypt(message: string, shift: number): string {
    return Array.from(message)
      .map(character => CeasarCoding.encryptCharacter(character, shift))
      .join('');
  }

  public static decrypt(encryptedMessage: string, shift: number): string {
    return Array.from(encryptedMessage)
      .map(character => CeasarCoding.descryptCharacter(character, shift))
      .join('');
  }

  private static encryptCharacter(character: string, shift: number): string {
    return CeasarCoding.calculateNewCharacter(
      character,
      (normalizedCode: number) => normalizedCode + shift
    );
  }

  private static descryptCharacter(character: string, shift: number): string {
    return CeasarCoding.calculateNewCharacter(
      character,
      (normalizedCode: number) => normalizedCode - shift
    );
  }

  private static calculateNewCharacter(
    character: string,
    shift: (normalizedCode: number) => number
  ): string {
    const upperCase = character.toUpperCase() === character;
    const characterCode = character.codePointAt(0);

    const baseCharacterCode = upperCase
      ? CeasarCoding.UpperCaseBaseCharacterCode
      : CeasarCoding.LowerCaseBaseCharacterCode;
    const maximumCharacterCode = upperCase
      ? CeasarCoding.UpperCaseMaximumCharacterCode
      : CeasarCoding.LowerCaseMaximumCharacterCode;

    if (
      characterCode !== undefined &&
      baseCharacterCode !== undefined &&
      maximumCharacterCode !== undefined
    ) {
      const normalizedCode = characterCode - baseCharacterCode;

      const modulus = maximumCharacterCode - baseCharacterCode + 1;

      const newNormalizedCode =
        ((shift(normalizedCode) % modulus) + modulus) % modulus;

      const newCode = newNormalizedCode + baseCharacterCode;

      return String.fromCodePoint(newCode);
    } else {
      return '';
    }
  }
}
