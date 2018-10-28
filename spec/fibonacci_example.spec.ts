import { cases } from '../lib';

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

// Impl
function fibonacciNumber(index: number): number {
    if (index < 2) return index;
    return fibonacciNumber(index - 1) + fibonacciNumber(index - 2);
}