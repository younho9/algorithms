export function solution(prices) {
	return prices.map((price, index) =>
		prices
			.slice(index + 1)
			.reduce(
				(acc, cur, index, arr) =>
					arr.slice(0, index + 1).some((v) => v < price) ? acc || 1 : ++acc,
				0,
			),
	);
}
