export function solution(birdgeLength, weight, truckWeights) {
	const onBridge = Array.from({length: birdgeLength}, () => null);
	const overBridge = [];
	const watingTrucks = [...truckWeights];
	let time = 0;

	while (overBridge.length !== truckWeights.length) {
		time++;
		const finishTruck = onBridge.shift();
		finishTruck ? overBridge.push(finishTruck) : null;

		const weightOnBridge = onBridge.reduce(
			(total, weight) => total + weight ?? 0,
			0,
		);

		weightOnBridge + watingTrucks[0] <= weight
			? onBridge.push(watingTrucks.shift())
			: onBridge.push(null);
	}

	return time;
}
