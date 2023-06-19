import {describe, it, expect} from 'vitest';
import {solution} from './42626.js';

describe('42626', () => {
	it('test 1', () => {
		const scoville = [1, 2, 3, 9, 10, 12];
		const K = 7;
		const result = 2;

		expect(solution(scoville, K)).toEqual(result);
	});
});
