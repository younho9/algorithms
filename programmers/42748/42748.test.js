import {describe, it, expect} from 'vitest';
import {solution} from './42748.js';

describe('42748', () => {
	it('test 1', () => {
		const array = [1, 5, 2, 6, 3, 7, 4];
		const commands = [
			[2, 5, 3],
			[4, 4, 1],
			[1, 7, 3],
		];
		const result = [5, 6, 3];

		expect(solution(array, commands)).toEqual(result);
	});
});
