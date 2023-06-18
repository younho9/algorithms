import {describe, it, expect} from 'vitest';
import {solution} from './42577.js';

describe('42577', () => {
	it('test 1', () => {
		const phoneBook = ['119', '97674223', '1195524421'];
		const result = false;

		expect(solution(phoneBook)).toEqual(result);
	});

	it('test 2', () => {
		const phoneBook = ['123', '456', '789'];
		const result = true;

		expect(solution(phoneBook)).toEqual(result);
	});

	it('test 3', () => {
		const phoneBook = ['12', '123', '1235', '567', '88'];
		const result = false;

		expect(solution(phoneBook)).toEqual(result);
	});
});
