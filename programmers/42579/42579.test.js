import {describe, it, expect} from 'vitest';
import {solution} from './42579.js';

describe('42579', () => {
	it('test 1', () => {
		const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
		const plays = [500, 600, 150, 800, 2500];
		const result = [4, 1, 3, 0];

		expect(solution(genres, plays)).toEqual(result);
	});
});
