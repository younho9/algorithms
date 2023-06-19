import {describe, it, expect} from 'vitest';
import {solution} from './42747.js';

describe('42747', () => {
	it('test 1', () => {
		const citations = [3, 0, 6, 1, 5];
		const result = 3;

		expect(solution(citations)).toEqual(result);
	});
});
