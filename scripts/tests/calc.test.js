const addition = require('../calc');

describe('calculator', () => {
    describe('addition function', () => {
        test('should return 42 for 20 + 22', () => {
            expect(addition(20, 22)).toBe(42);
        });
        test('should return 73 for 40 + 33', () => {
            expect(addition(40, 33)).toBe(73);
        });
    });
    describe('subtraction function', () => {

    });
    describe('division function', () => {

    });
    describe('multiplication function', () => {

    });
});