import {describe, it, expect} from 'vitest';
import {solution} from './42885.js';

describe('42885', () => {
	it('test 1', () => {
		const people = [70, 50, 80, 50];
		const limit = 100;
		const result = 3;

		expect(solution(people, limit)).toEqual(result);
	});

	it('test 2', () => {
		const people = [70, 80, 50];
		const limit = 100;
		const result = 3;

		expect(solution(people, limit)).toEqual(result);
	});
});
