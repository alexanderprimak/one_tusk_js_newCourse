const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};
///////////////////////////////////////////////////////////////////// C помощью if

// if (personalMovieDB.count < 10) {
// 	console.log('Вы посмотрели не так много фильмов');
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
// 	console.log('Ну это нормальное количество');
// } else if (personalMovieDB.count > 30) {
// 	console.log('Вы киноман');
// } else {
// 	console.log('errors');
// }

///////////////////////////////////////////////////////////////// C помощью ?

personalMovieDB.count < 10
	? console.log('Вы посмотрели не так много фильмов')
	: personalMovieDB.count > 10 && personalMovieDB.count < 30
	? console.log('Ну это нормальное количество')
	: personalMovieDB.count > 30
	? console.log('Вы киноман')
	: console.log('errors');

////////////////////////////////////////////////////////////////  C помощью for

// for (let i = 0; i < 2; i++) {
// 	let a = prompt('Какой последний фильм вы посмотрели'),
// 		b = prompt('На сколько оцените его по 10 бальной шкале?');
// 	if (a != null && a != '' && b != null && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }

//////////////////////////////////////////////////////////////////////////// C помощью while

// let i = 0;

// while (i < 2) {
// 	let a = prompt('Какой последний фильм вы посмотрели'),
// 		b = prompt('На сколько оцените его по 10 бальной шкале?');
// 	if (a != null && a != '' && b != null && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('done');
// 		i++;
// 	} else {
// 		console.log('error');
// 		i--;
// 	}
// }

////////////////////////////////////////////////////////////////////////////// C помощью do while

let i = 0;

do {
	let a = prompt('Какой последний фильм вы посмотрели'),
		b = prompt('На сколько оцените его по 10 бальной шкале?');
	if (a != null && a != '' && b != null && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
		i++;
	} else {
		console.log('error');
		i--;
	}
} while (i <= 1);

console.log(personalMovieDB);
