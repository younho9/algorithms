const getClothesByType = (clothes) =>
	clothes.reduce((clothesByType, [clothName, clothType]) => {
		clothesByType[clothType]
			? clothesByType[clothType].push(clothName)
			: (clothesByType[clothType] = [clothName]);

		return clothesByType;
	}, {});

const getCombinations = (clothesByType) =>
	Object.values(clothesByType).reduce(
		(combinations, currentClothes) =>
			combinations * (currentClothes.length + 1),
		1,
	) - 1;

export function solution(clothes) {
	return getCombinations(getClothesByType(clothes));
}
