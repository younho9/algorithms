export function solution(participants, completions) {
	const personCountsByName = {};

	participants.forEach((name) => {
		personCountsByName[name] = (personCountsByName[name] ?? 0) + 1;
	});

	completions.forEach((name) => {
		personCountsByName[name] = (personCountsByName[name] ?? 0) - 1;
	});

	for (const [name, personCount] of Object.entries(personCountsByName)) {
		if (personCount === 1) {
			return name;
		}
	}
}
