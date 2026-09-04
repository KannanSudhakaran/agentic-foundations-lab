import { farewell, greet } from "../src/greeting.js";
import assert from "node:assert";
import test from "node:test";

test("greet uses the name", () => {
  assert.strictEqual(greet("Ada"), "Hello, Ada!");
});

test("greet defaults to friend", () => {
  assert.strictEqual(greet(), "Hello, friend!");
});

test("farewell uses the name", () => {
  assert.strictEqual(farewell("Ada"), "Goodbye, Ada!");
});

test("farewell defaults to friend", () => {
  assert.strictEqual(farewell(), "Goodbye, friend!");
});

for (const invalidInput of [null, 42, true, {}, [], Symbol("s"), () => {}]) {
  test(`greet throws TypeError for ${String(invalidInput)}`, () => {
    assert.throws(() => greet(invalidInput), TypeError);
  });

  test(`farewell throws TypeError for ${String(invalidInput)}`, () => {
    assert.throws(() => farewell(invalidInput), TypeError);
  });
}
