const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

const a = prompt('Какой последний фильм вы посмотрели'),
	b = prompt('На сколько оцените его по 10 бальной шкале?'),
	c = prompt('Какой последний фильм вы посмотрели?'),
	g = prompt('На сколько оцените его по 10 бальной шкале?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = g;

console.log(personalMovieDB);
