import {describe, it, expect} from 'vitest';
import {solution} from './43165.js';

describe('43165', () => {
	it('test 1', () => {
		const numbers = [1, 1, 1, 1, 1];
		const target = 3;
		const result = 5;

		expect(solution(numbers, target)).toEqual(result);
	});
});
