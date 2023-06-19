import {describe, it, expect} from 'vitest';
import {solution} from './42587.js';

describe('42587', () => {
	it('test 1', () => {
		const priorities = [2, 1, 3, 2];
		const location = 2;
		const result = 1;

		expect(solution(priorities, location)).toEqual(result);
	});

	it('test 2', () => {
		const priorities = [1, 1, 9, 1, 1, 1];
		const location = 0;
		const result = 5;

		expect(solution(priorities, location)).toEqual(result);
	});
});
