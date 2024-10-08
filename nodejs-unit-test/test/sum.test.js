import { sum } from "../src/sum.js";

test("sum", () => {
    expect(sum(0, 0)).toBe(0);

    const a = {};
    expect(() => {
        sum(a, a);
    }).toThrow();
});
