import { cases, printCase } from '../lib';

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

    describe('printCase()', () => {

        it('should print on the console the given case details', () => {
            let parameter = 'a parameter';

            printCase(3, parameter);

            expect(console.log).toHaveBeenCalledWith('Case [3]', parameter)
        });

    });

});