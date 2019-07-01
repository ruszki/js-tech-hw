const shifts: Map<string, number> = new Map<string, number>();

function resolveShift(code: string): number {
  const storedShift = shifts.get(code);

  if (storedShift === undefined) {
    const shift = Math.floor(Math.random() * 26);

    shifts.set(code, shift);

    return shift;
  } else {
    return storedShift;
  }
}

export default resolveShift;
