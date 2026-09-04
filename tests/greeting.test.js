import { farewell, greet } from "../src/greeting.js";
import assert from "node:assert";
import test from "node:test";

test("greet uses the name", () => {
  assert.strictEqual(greet("Ada"), "Hello, Ada!");
});

test("farewell uses the name", () => {
  assert.strictEqual(farewell("Ada"), "Goodbye, Ada!");
});
