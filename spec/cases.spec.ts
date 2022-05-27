import { cases } from '../lib';
import { Case } from '../lib/cases';

describe('Cases', () => {

    it('should return a bdd dsl', () => {
        let bddDsl = cases([1, 2]);
        expect(bddDsl.it).toBeDefined();
        expect(bddDsl.xit).toBeDefined();
    });

});

describe('Case', () => {

    let originalConsoleLog: any;

    beforeEach(() => {
        originalConsoleLog = console.log;
        console.log = jasmine.createSpy('log');
    });

    afterEach(() => {
        console.log = originalConsoleLog;
    });

    describe('buildDescription()', () => {

        const aDescription = 'a spec description';

        it('should include original description and case index', () => {
            const caseIndex = 3;
            const aCase = new Case(caseIndex, 'a parameter', aDescription);

            const result = aCase.buildDescription();

            expect(result).toContain(aDescription);
            expect(result).toContain(' [3]');
        });

        it('should include param when it is a primitive value', () => {
            const parameter = 'foo';
            const aCase = new Case(0, parameter, aDescription);

            const result = aCase.buildDescription();

            expect(result).toContain(' (foo)');
        });

        it('should include param when it is an array of values', () => {
            const parameter = [4, 'IV'];
            const aCase = new Case(0, parameter, aDescription);

            const result = aCase.buildDescription();

            expect(result).toContain(' (4,IV)');
        });

        it('should include param when it is null', () => {
            const parameter = null;
            const aCase = new Case(0, parameter, aDescription);

            const result = aCase.buildDescription();

            expect(result).toContain(' (null)');
        });

        it('should include param when it is undefined', () => {
            const parameter = undefined;
            const aCase = new Case(0, parameter, aDescription);

            const result = aCase.buildDescription();

            expect(result).toContain(' (undefined)');
        });

        it('should not include param when it is an object', () => {
            const parameter = {x: 0, y: 1};
            const aCase = new Case(0, parameter, aDescription);

            const result = aCase.buildDescription();

            expect(result).toEqual('a spec description [0]');
        });

    });

});
