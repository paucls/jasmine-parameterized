interface BddDsl {
    it: (description: string, code: (param: any) => void, timeout?: number) => void;
    xit: (description: string, code: (param: any) => void, timeout?: number) => void;
}

/**
 * Convenient function to easily parameterized the execution of a `it` spec function.
 * @param parameters An array of single or multiple value parameters. Example: ['foo', 'bar']
 */
export function cases(parameters: any[]): BddDsl {
    return {
        it: function (description: string = '', code: (param: any) => void, timeout?: number) {
            parameters.forEach((parameter, idx) => {
                it(buildDescription(idx, parameter, description),
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

export function buildDescription(idx: number, parameter: any, description: string): string {
    if (typeof parameter === 'object') {
        return `${description} [${idx}]`;
    }
    return `${description} (${parameter}) [${idx}]`;
}

export function printCase(idx: number, parameter: any) {
    console.log(`Case #${idx} -- Parameters:`, parameter);
}
