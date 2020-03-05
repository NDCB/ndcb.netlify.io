import { isNumber, isString, isObject, isIterable } from "../src/type";

describe("isString", () => {
	for (const { input, expected } of require("./fixtures/isString.json")) {
		test(`returns "${expected}" for input "${input}"`, () => {
			expect(isString(input)).toBe(expected);
		});
	}
});

describe("isNumber", () => {
	for (const { input, expected } of require("./fixtures/isNumber.json")) {
		test(`returns "${expected}" for input "${input}"`, () => {
			expect(isNumber(input)).toBe(expected);
		});
	}
});

describe("isObject", () => {
	for (const { input, expected } of require("./fixtures/isObject.json")) {
		test(`returns "${expected}" for input "${input}"`, () => {
			expect(isObject(input)).toBe(expected);
		});
	}
});

describe("isIterable", () => {
	for (const { input, expected } of require("./fixtures/isIterable.json")) {
		test(`returns "${expected}" for input "${input}"`, () => {
			expect(isIterable(input)).toBe(expected);
		});
	}
});
