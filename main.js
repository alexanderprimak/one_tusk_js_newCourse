/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
	count: '',
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	howMoviesShow: function () {
		this.count = +prompt('Сколько фильмов вы посмотрели?');
		while (this.count == '' || this.count == null || isNaN(this.count)) {
			this.count = +prompt('Сколько фильмов вы посмотрели?');
		}
	},
	showMyDB: function () {
		!this.privat ? console.log(this) : '';
	},
	detectPersonalLevel: function () {
		this.count < 10
			? console.log('Вы посмотрели не так много фильмов')
			: this.count > 10 && this.count < 30
			? console.log('Ну это нормальное количество')
			: this.count > 30
			? console.log('Вы киноман')
			: console.log('errors');
	},
	filmScore: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt('Какой последний фильм вы посмотрели'),
				b = prompt('На сколько оцените его по 10 бальной шкале?');
			if (a != null && a != '' && b != null && b != '' && a.length < 50) {
				this.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i < 4; i++) {
			let a = prompt(`Ваш любимый жанр под номером ${i}`);

			if (a != null && a != '' && a.length < 50) {
				this.genres.push(a);
			} else {
				console.log('error');
				i--;
			}
		}
		this.genres.forEach((genr, index) =>
			console.log(`Любимый жанр # ${index + 1} - ${genr}`)
		);
	},
	toggleVisibleMyDB: function () {
		if (!this.privat) {
			this.privat = true;
		} else {
			this.privat = false;
		}
	},
};

personalMovieDB.howMoviesShow();
personalMovieDB.detectPersonalLevel();
personalMovieDB.filmScore();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
