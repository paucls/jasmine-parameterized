import { cases } from "../lib";

describe('Cases', () => {

    it('should return a bdd dsl', () => {
        let bddDsl = cases([1, 2]);
        expect(bddDsl.it).toBeDefined();
        expect(bddDsl.xit).toBeDefined();
    });

});