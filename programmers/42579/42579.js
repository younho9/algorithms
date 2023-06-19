export function solution(genreById, playById) {
	const songs = genreById.map((genre, id) => ({
		id,
		plays: playById[id],
		genre,
	}));

	const genres = [...new Set(genreById)]
		.map((name) => ({
			name,
			playes: songs
				.filter((song) => song.genre === name)
				.reduce((totalPlays, {plays}) => totalPlays + plays, 0),
		}))
		.sort((a, b) => b.playes - a.playes);

	return genres
		.map((genre) =>
			songs
				.filter((song) => song.genre === genre.name)
				.sort((a, b) => b.plays - a.plays)
				.map((song) => song.id)
				.slice(0, 2),
		)
		.flat();
}
