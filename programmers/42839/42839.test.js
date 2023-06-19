import {describe, it, expect} from 'vitest';
import {solution} from './42839.js';

describe('42839', () => {
	it('test 1', () => {
		const numbers = '17';
		const result = 3;

		expect(solution(numbers)).toEqual(result);
	});

	it('test 2', () => {
		const numbers = '011';
		const result = 2;

		expect(solution(numbers)).toEqual(result);
	});
});
