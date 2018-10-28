export function cases(parameters: any[]): object {
    return {
        it: function (testName: string, testFunc: (param: any) => void) {
            parameters.forEach((parameter, idx) => {
                it(`${testName} [${idx}]`, () => {
                    testFunc(parameter);
                });
            });
        }
    };
}