interface BddDsl {
    it: (description: string, code: (param: any) => void, timeout?: number) => void;
    xit: (description: string, code: (param: any) => void, timeout?: number) => void;
}

export function cases(parameters: any[]): BddDsl {
    return {
        it: function (description: string = '', code: (param: any) => void, timeout?: number) {
            parameters.forEach((parameter, idx) => {
                it(`${description} [${idx}]`,
                    () => {
                        printCase(idx, parameter);
                        code(parameter);
                    },
                    timeout);
            });
        },
        xit
    };
}

export function printCase(idx: number, parameter: any) {
    console.log(`Case [${idx}]`, parameter);
}
