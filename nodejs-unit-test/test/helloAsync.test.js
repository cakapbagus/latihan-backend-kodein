import { helloAsync } from "../src/helloAsync.js";

test("helloAsync", async () => {
    expect(await helloAsync("world")).toBe("hello world");
});
