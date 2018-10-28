Jasmine-Parameterized
=====================

[![Build Status](https://travis-ci.org/paucls/jasmine-parameterized.svg)](https://travis-ci.org/paucls/jasmine-parameterized)

Parameterized unit tests for Jasmine.

## Examples

### Single param per case
``` ts
import { cases } from 'jasmine-parameterized';

describe('Customer', () => {

    cases([
        4,
        14
    ])
    .it('should be a child when aged 4 to 14 years', (age) => {
        const customer = new Customer(age);
        expect(customer.isChild()).toBe(true);
    });
...
```
![Single param per case](img/example1.png)

### Multiple params per case
``` ts
describe('Fibonacci Sequence', () => {

    describe('First two numbers', () => {
        cases([
            {index: 0, expected: 0},
            {index: 1, expected: 1}
        ])
        .it('should be same as index', ({index, expected}) => {
            expect(fibonacciNumber(index)).toEqual(expected);
        });
    });

    describe('Third number on', () => {
        cases([
            {index: 2, expected: 1},
            {index: 3, expected: 2},
            {index: 5, expected: 5}
        ])
        .it('should be the sum of previous two', ({index, expected}) => {
            expect(fibonacciNumber(index)).toEqual(expected);
        });
    });

});
```

![Multiple params per case](img/example2.png)
