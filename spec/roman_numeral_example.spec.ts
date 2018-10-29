import { cases } from "../lib";

const equivalences: any = {
    5: 'V',
    4: 'IV',
    1: 'I'
};

function romanFor(arabic: number): string {
    if (equivalences[arabic]) {
        return equivalences[arabic];
    }
    return romanFor(arabic - 1) + equivalences[1];
}

describe('Roman Numeral Converter', () => {

    cases([
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI']
    ])
    .it('converts Arabic number to its equivalent Roman numeral', ([arabic, roman]) => {
        expect(romanFor(arabic)).toBe(roman);
    });

});