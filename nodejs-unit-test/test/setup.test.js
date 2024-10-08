import { sum } from "../src/sum.js";

let counter = 0;

beforeEach(() => {
    console.log("before", counter);
});

afterEach(() => {
    console.log("after", ++counter);
});

// TEST 1
test("number + number", () => {
    expect(sum(0, 0)).toBe(0);
});

// TEST 2
test("number + string", () => {
    expect(() => {
        sum(0, "0");
    }).toThrow(TypeError);
});
