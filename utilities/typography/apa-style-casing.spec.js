import { apaStyleCasing } from './index';

describe('utilities', () => {
    describe('typography', () => {
        describe('apa-style-casing.js', () => {
            test.each([
                [
                    'Typesetting conventions are modulated by orthography and linguistics, word structures, word frequencies, morphology, phonetic constructs and linguistic syntax.',
                    'Typesetting Conventions Are Modulated by Orthography and Linguistics, Word Structures, Word Frequencies, Morphology, Phonetic Constructs and Linguistic Syntax.'
                ],
            ])('should capitalise the given text in the apa style', (input, expectedOutput) => {
                const output = apaStyleCasing(input);

                expect(output).toBe(expectedOutput);
            });

            test.each([
                '.NET',
                'C#',
                'F#',
            ])('should not change the casing of special words and symbols like %s', (input) => {
                const output = apaStyleCasing(input);

                expect(output).toBe(input);
            });
        });
    });
});