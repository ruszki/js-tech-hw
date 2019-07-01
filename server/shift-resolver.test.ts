import shiftResolver from "./shift-resolver";

test("Get shift for code", () => {
  const code = "code";

  expect(shiftResolver(code)).toBeLessThan(26);
});

test("Get the same shift for the same code", () => {
  const code = "code";

  const firstShift = shiftResolver(code);
  const secondShift = shiftResolver(code);

  expect(firstShift).toEqual(secondShift);
});
