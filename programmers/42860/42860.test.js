import {describe, it, expect} from 'vitest';
import {solution} from './42860.js';

describe('42860', () => {
	it('test 1', () => {
		const name = 'JEROEN';
		const result = 56;

		expect(solution(name)).toEqual(result);
	});

	it('test 2', () => {
		const name = 'JAN';
		const result = 23;

		expect(solution(name)).toEqual(result);
	});

	it('test 3', () => {
		const name = 'JANA';
		const result = 24;

		expect(solution(name)).toEqual(result);
	});

	it('test 4', () => {
		const name = 'AAAA';
		const result = 0;

		expect(solution(name)).toEqual(result);
	});
});
