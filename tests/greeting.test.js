import { farewell, greet } from "../src/greeting.js";
import assert from "node:assert";
import test from "node:test";

test("greet uses the name", () => {
  assert.strictEqual(greet("Ada"), "Hello, Ada!");
});

test("greet uses a default name", () => {
  assert.strictEqual(greet(), "Hello, friend!");
});

test("farewell uses the name", () => {
  assert.strictEqual(farewell("Ada"), "Goodbye, Ada!");
});

test("farewell uses a default name", () => {
  assert.strictEqual(farewell(), "Goodbye, friend!");
});
