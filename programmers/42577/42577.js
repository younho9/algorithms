export function solution(phoneBook) {
	return !phoneBook.some((currentPhoneNumber) =>
		phoneBook
			.filter((p) => p !== currentPhoneNumber)
			.some((p) => p.startsWith(currentPhoneNumber)),
	);
}
