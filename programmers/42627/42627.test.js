import {describe, it, expect} from 'vitest';
import {solution} from './42627.js';

describe('42627', () => {
	it('test 1', () => {
		const jobs = [
			[0, 3],
			[1, 9],
			[2, 6],
		];
		const result = 9;

		expect(solution(jobs)).toEqual(result);
	});
});
