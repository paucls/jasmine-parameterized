import { cases, printCase, buildDescription } from '../lib';

describe('Cases', () => {

    let originalConsoleLog: any;

    beforeEach(() => {
        originalConsoleLog = console.log;
        console.log = jasmine.createSpy('log');
    });

    afterEach(() => {
        console.log = originalConsoleLog;
    });

    it('should return a bdd dsl', () => {
        let bddDsl = cases([1, 2]);
        expect(bddDsl.it).toBeDefined();
        expect(bddDsl.xit).toBeDefined();
    });

    describe('buildDescription()', () => {

        it('should include description and case index', () => {
            let parameter = 'a parameter';
            let description = 'a spec description';

            const result = buildDescription(3, parameter, description);

            expect(result).toContain(description);
            expect(result).toContain(' [3]');
        });

        it('should include the case param if it is a single primitive value', () => {
            let parameter = 'a parameter';

            const result = buildDescription(3, parameter, '');

            expect(result).toContain('(a parameter)');
        });

        it('should not include the case param if it is an object with multiple values', () => {
            let parameter = {x: 0, y: 1};
            let description = 'a spec description';

            const result = buildDescription(3, parameter, description);

            expect(result).toEqual('a spec description [3]');
        });

    });

    describe('printCase()', () => {

        it('should print on the console the given case details', () => {
            let parameter = 'a parameter';

            printCase(3, parameter);

            expect(console.log).toHaveBeenCalledWith('Case [3]', parameter)
        });

    });

});