import {describe, it, expect} from 'vitest';
import {solution} from './42584.js';

describe('42584', () => {
	it('test 1', () => {
		const prices = [1, 2, 3, 2, 3];
		const result = [4, 3, 1, 1, 0];

		expect(solution(prices)).toEqual(result);
	});
});
