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
                const aCase = new Case(idx, parameter, description);
                it(aCase.buildDescription(),
                    () => {
                        aCase.logCase();
                        code(parameter);
                    },
                    timeout);
            });
        },
        xit
    };
}

/** @internal */
export class Case {
    constructor(private index: number,
                private parameter: any,
                private description: string) {}

    buildDescription(): string {
        if (this.hasComplexParameter()) {
            return `${this.description} [${this.index}]`;
        }
        return `${this.description} (${this.parameter}) [${this.index}]`;
    }

    logCase() {
        if (this.hasComplexParameter()) {
            console.log(`Case #${this.index} -- Parameters:`, this.parameter);
        }
    }

    private hasComplexParameter() {
        return typeof this.parameter === 'object' && !Array.isArray(this.parameter);
    }
}
