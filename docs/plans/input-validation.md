1. **Inspect current implementation and tests for `greet`/`farewell`.**  
   Confirm where the functions live, how default-name behavior is currently implemented, and how tests are organized.

2. **Define validation behavior precisely.**  
   Decide and document the rule:  
   - Accept: `undefined` (to keep default `"friend"` behavior) and any string.  
   - Reject: any non-string value (`null`, numbers, booleans, objects, arrays, symbols, functions, etc.) with `TypeError`.

3. **Add runtime type checks in both functions.**  
   Plan to validate each input before constructing the return string so invalid inputs fail fast and consistently.

4. **Keep existing fallback semantics intact.**  
   Ensure `greet()` and `farewell()` still return default outputs when called with no argument, while invalid explicit arguments now throw.

5. **Extend unit tests for invalid input cases.**  
   Add test coverage that asserts `TypeError` is thrown for representative non-string inputs for both functions.

6. **Retain/verify existing tests for valid behavior.**  
   Keep existing tests for explicit string names and default no-arg calls to prevent regressions.

7. **Run test suite and confirm expected behavior matrix.**  
   Validate pass/fail outcomes for:
   - `greet()` / `farewell()` (default) ✅  
   - `greet("Name")` / `farewell("Name")` ✅  
   - `greet(nonString)` / `farewell(nonString)` throws `TypeError` ✅

**Exact files to touch**
1. `index.js` (or the file currently exporting `greet` and `farewell`)  
2. `test/index.test.js` (or the existing test file covering greeting/farewell behavior)
