console.log('Hello!');
const movieListDiv = document.getElementById('movieListDiv');
const movies = [
  { id: 1, Name: 'The Shawshank Redumption', Genre: 'Drama', Year: 1994 },
  { id: 2, Name: 'The God Father', Genre: 'Crime', Year: 1972 },
  { id: 3, Name: 'The Dark Knight', Genre: 'Action', Year: 2008 },
  { id: 4, Name: 'Pulp Fiction', Genre: 'Crime', Year: 1994 },
];

const moviesList = movies.map(
  (movie) => `
<div>
<strong>Id:</strong>${movie.id}<br>
<strong>Name:</strong>${movie.Name}<br>
<strong>Genre:</strong>${movie.Genre}<br>
<strong>Year:</strong>${movie.Year}<br>
<hr>
</div>
`
);
movieListDiv.innerHTML = moviesList.join(' ');
