import {describe, it, expect} from 'vitest';
import {solution} from './42578.js';

describe('42578', () => {
	it('test 1', () => {
		const clothes = [
			['yellow_hat', 'headgear'],
			['blue_sunglasses', 'eyewear'],
			['green_turban', 'headgear'],
		];

		expect(solution(clothes)).toEqual(5);
	});

	it('test 2', () => {
		const clothes = [
			['crow_mask', 'face'],
			['blue_sunglasses', 'face'],
			['smoky_makeup', 'face'],
		];

		expect(solution(clothes)).toEqual(3);
	});

	it('test 3', () => {
		const clothes = [
			['crow_mask_1', 'face'],
			['crow_mask_2', 'face'],
			['crow_mask_3', 'face'],
			['blue_sunglasses_1', 'face'],
			['blue_sunglasses_2', 'face'],
			['blue_sunglasses_3', 'face'],
			['smoky_makeup_1', 'face'],
			['smoky_makeup_2', 'face'],
			['smoky_makeup_3', 'face'],
			['yellow_hat_1', 'headgear'],
			['yellow_hat_2', 'headgear'],
			['yellow_hat_3', 'headgear'],
			['green_turban_1', 'headgear'],
			['green_turban_2', 'headgear'],
			['green_turban_3', 'headgear'],
			['blue_sunglasses_1', 'eyewear'],
			['blue_sunglasses_2', 'eyewear'],
			['blue_sunglasses_3', 'eyewear'],
		];

		expect(solution(clothes)).toEqual(10 * 7 * 4 - 1);
	});
});
