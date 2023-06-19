export function solution(progresses, speed) {
	return progresses
		.map((progress, i) => Math.ceil((100 - progress) / speed[i]))
		.reduce((deploys, days) => {
			const latestDeploy = deploys.at(-1);

			latestDeploy && latestDeploy.every((deploy) => deploy >= days)
				? latestDeploy.push(days)
				: deploys.push([days]);

			return deploys;
		}, [])
		.map((deploy) => deploy.length);
}
