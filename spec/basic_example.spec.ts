import { cases } from '../lib';

describe('Customer', () => {

    cases([
        4,
        14
    ])
    .it('should be a child when aged 4 to 14 years', (age) => {
        const customer = new Customer(age);
        expect(customer.isChild()).toBe(true);
    });

    cases([
        3,
        15,
        18
    ])
    .it('should not be a child in other cases', (age) => {
        const customer = new Customer(age);
        expect(customer.isChild()).toBe(false);
    });

});

// Impl
class Customer {
    constructor(private age: number) {}

    isChild(): boolean {
        return this.age >= 4 && this.age <= 14;
    }
}