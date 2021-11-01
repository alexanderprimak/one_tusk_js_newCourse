let numberOfFilms = '';

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function howMoviesShow() {
	numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');
	}
}

function showMyDB() {
	!personalMovieDB.privat ? console.log(personalMovieDB) : '';
}
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

function detectPersonalLevel() {
	personalMovieDB.count < 10
		? console.log('Вы посмотрели не так много фильмов')
		: personalMovieDB.count > 10 && personalMovieDB.count < 30
		? console.log('Ну это нормальное количество')
		: personalMovieDB.count > 30
		? console.log('Вы киноман')
		: console.log('errors');
}

////////////////////////////////////////////////////////////////  C помощью for

function filmScore() {
	for (let i = 0; i < 2; i++) {
		let a = prompt('Какой последний фильм вы посмотрели'),
			b = prompt('На сколько оцените его по 10 бальной шкале?');
		if (a != null && a != '' && b != null && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

function writeYourGenres() {
	for (let i = 1; i < 4; i++) {
		let a = prompt(`Ваш любимый жанр под номером ${i}`);

		if (a != null && a != '' && a.length < 50) {
			personalMovieDB.genres.push(a);
		} else {
			console.log('error');
			i--;
		}
	}
}

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

// let i = 0;

// do {
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
// } while (i <= 1);

howMoviesShow();
detectPersonalLevel();
filmScore();
writeYourGenres();
showMyDB();
