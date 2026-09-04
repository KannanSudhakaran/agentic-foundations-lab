import { greet } from "../src/greeting.js";
import assert from "node:assert";
import test from "node:test";

test("greet uses the name", () => {
  assert.strictEqual(greet("Ada"), "Hello, Ada!");
});
