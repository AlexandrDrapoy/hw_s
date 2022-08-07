// const cars = [{
//     car: 'Honda',
//     type: 'Civic',
//     price: 12000
// },
// {
//     car: 'Audi',
//     type: 'Q7',
//     price: 40000,
// }, {
//     car: 'BMW',
//     type: '5 siries',
//     price: 9000,
// }, {
//     car: 'Honda',
//     type: 'Accord',
//     price: 20000,
// Кількість знайдених
// Потрібно створити функцію яка буде приймати 2 параметри(значення з інпуту)
// 1 інпут значення від якої суми робити пошук
// 2 інпут значення до якої суми робити пошук
// Повертає список автомобілів які підпадають під наш пошук

const films = [
  {
    title: "Interceptor",
    genre_ids: [28, 53, 12],
  },
  {
    title: "Fantastic Beasts: The Secrets of Dumbledore",
    genre_ids: [14, 12, 28],
  },
  {
    title: "Last Seen Alive",
    genre_ids: [28, 53],
  },
  {
    title: "Jurassic World Dominion",
    genre_ids: [878, 28, 12, 53],
  },
];

const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

// створити інпут
// вводимо назву фільма
// виводимо назву фільма та жанр.
// const filmName = document.querySelector(".films_name");
// const searchFilm = document.querySelector(".search");
const result = document.querySelector(".result");
const searchForm = document.querySelector(".searchFormFilm");
searchForm.addEventListener("submit", findFilm);

function findFilm(evt) {
  evt.preventDefault();
  const elem = evt.target.elements.film_name.value;
  let str = "Film not found";
  const findingFilm = films.find(({ title }) => title === elem);

  if (findingFilm) {
    const genresNames = findingFilm.genre_ids.map((elem) => {
      const idNames = genres.find(({ id }) => elem === id);
      return idNames.name;
    });

    const genresFoOutput = genresNames.join(", ");

    str = `<span>Film name ${elem} genres is ${genresFoOutput}</span>`;
  }

  result.innerHTML = str;
}
