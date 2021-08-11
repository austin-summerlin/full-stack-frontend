/* eslint-disable max-len */
export const getMovies = async () => {
  const res = await fetch('https://ivys-house-of-horror.herokuapp.com/api/movies/');
  const movies = await res.json();
  return movies;
};

export const getMovie = async (id) => {
  console.log(id);
  const res = await fetch(`https://ivys-house-of-horror.herokuapp.com/api/movies/${id}`);
  const json = await res.json();
  console.log(json);
  return json;
};

export const addMovie = async (movie) => {
  const res = await fetch('https://ivys-house-of-horror.herokuapp.com/api/movies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(movie)
  });
  const json = await res.json();
  return json;
};

export const deleteMovie = async (id) => {
  const res = await fetch(`https://ivys-house-of-horror.herokuapp.com/api/movies/${id}`, {
    method: 'DELETE'
  });
  const deletedMovie = res.json();
  return deletedMovie;
};

export const updateMovie = async (movie) => {
  const res = await fetch(`https://ivys-house-of-horror.herokuapp.com/api/movies/${movie.id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(movie)
  });
  const updatedMovie = res.json();
  return updatedMovie;
};

