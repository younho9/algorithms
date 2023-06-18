import {describe, it, expect} from 'vitest';
import {solution} from './42576.js';

describe('42576', () => {
	it('test 1', () => {
		const participant = ['leo', 'kiki', 'eden'];
		const completion = ['eden', 'kiki'];
		const result = 'leo';

		expect(solution(participant, completion)).toEqual(result);
	});

	it('test 2', () => {
		const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
		const completion = ['josipa', 'filipa', 'marina', 'nikola'];
		const result = 'vinko';

		expect(solution(participant, completion)).toEqual(result);
	});

	it('test 3', () => {
		const participant = ['mislav', 'stanko', 'mislav', 'ana'];
		const completion = ['stanko', 'ana', 'mislav'];
		const result = 'mislav';

		expect(solution(participant, completion)).toEqual(result);
	});
});
