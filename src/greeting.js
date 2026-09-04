export function greet(name = "friend") {
  if (name !== undefined && typeof name !== "string") {
    throw new TypeError("Name must be a string or undefined");
  }

  return `Hello, ${name}!`;
}

export function farewell(name = "friend") {
  if (name !== undefined && typeof name !== "string") {
    throw new TypeError("Name must be a string or undefined");
  }

  return `Goodbye, ${name}!`;
}

const greeting = { greet, farewell };

export default greeting;
