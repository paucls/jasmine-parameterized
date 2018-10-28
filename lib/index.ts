interface BddDsl {
    it: (description: string, code: (param: any) => void, timeout?: number) => void;
    xit: (description: string, code: (param: any) => void, timeout?: number) => void;
}

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
    console.log(`Case [${idx}]`, parameter);
}
