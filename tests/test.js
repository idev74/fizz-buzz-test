const fb = require('../fizzbuzz')

test('Sanity check', () => {
    expect(2 + 2).toBe(4)
});

test('Each constant is equal to their defined value', () => {
    expect(fb.FIZZ).toBe('fizz')
    expect(fb.BUZZ).toBe('buzz')
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
});

test('isFizzy returns true when n is divisible by 3', () => {
    expect(fb.isFizzy(6)).toBe(true)
});

test('isBuzzy returns true when n is divisible by 5', () => {
    expect(fb.isBuzzy(10)).toBe(true)
});

test('fizzyBuzzy returns FIZZ when n is divisible by 3', () => {
    expect(fb.fizzyBuzzy(6)).toBe(fb.FIZZ)
});

test('fizzyBuzzy returns BUZZ when n is divisible by 5', () => {
    expect(fb.fizzyBuzzy(10)).toBe(fb.BUZZ)
});

test('fizzyBuzzy returns FIZZBUZZ when n is divisible by 3 and 5', () => {
    expect(fb.fizzyBuzzy(15)).toBe(fb.FIZZBUZZ)
});

test('fizzBuzz returns an object with properties of count, fizz, buzz, and fizzBuzz', () => {
    expect(fb.fizzBuzz(15)).toStrictEqual({ count: 15, fizz: 4, buzz: 2, fizzBuzz: 1 })
});