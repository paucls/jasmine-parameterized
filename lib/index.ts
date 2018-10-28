export function cases(parameters: any[]): BddDsl {
    return {
        it: function (description: string, code: (param: any) => void, timeout?: number) {
            parameters.forEach((parameter, idx) => {
                it(`${description} [${idx}]`,
                    () => { code(parameter); },
                    timeout);
            });
        },
        xit
    };
}

interface BddDsl {
    it: (description: string, code: (param: any) => void, timeout?: number) => void;
    xit: (description: string, code: (param: any) => void, timeout?: number) => void;
}