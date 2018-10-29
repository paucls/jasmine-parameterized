import { cases } from '../lib';
import { buildDescription, printCase } from '../lib/cases';

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

        const aDescription = 'a spec description';

        it('should include original description and case index', () => {
            const caseIndex = 3;

            const result = buildDescription(caseIndex, 'a parameter', aDescription);

            expect(result).toContain(aDescription);
            expect(result).toContain(' [3]');
        });

        it('should include param when it is a primitive value', () => {
            const parameter = 'foo';

            const result = buildDescription(0, parameter, aDescription);

            expect(result).toContain(' (foo)');
        });

        it('should include param when it is an array of values', () => {
            const parameter = [4, 'IV'];

            const result = buildDescription(0, parameter, aDescription);

            expect(result).toContain(' (4,IV)');
        });

        it('should not include param when it is an object', () => {
            const parameter = {x: 0, y: 1};

            const result = buildDescription(0, parameter, aDescription);

            expect(result).toEqual('a spec description [0]');
        });

    });

    describe('printCase()', () => {

        it('should print on the console the given case details', () => {
            let parameter = 'a parameter';

            printCase(3, parameter);

            expect(console.log).toHaveBeenCalledWith('Case #3 -- Parameters:', parameter)
        });

    });

});