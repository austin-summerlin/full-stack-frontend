/* eslint-disable no-console */
/* eslint-disable max-len */

export const getMovies = async () => {
  const res = await fetch(URL);
  const movies = await res.json();
  return movies;
};

export const getMovie = async (id) => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

export const addMovie = async (movie) => {
  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(movie)
  });
  const newMovie = res.json();
  return newMovie;
};

export const deleteMovie = async (id) => {
  const res = await fetch(`${URL}/${id}`, {
    method: 'DELETE'
  });
  const deletedMovie = res.json();
  return deletedMovie;
};

export const updateMovie = async (movie) => {
  const res = await fetch(`${URL}/${movie.id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(movie)
  });
  const updatedMovie = res.json();
  return updatedMovie;
};



