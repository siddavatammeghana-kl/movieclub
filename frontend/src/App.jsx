
import React, { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const [form, setForm] = useState({
    title: "",
    genre: "",
    releaseDate: "",
    year: "",
    director: "",
    rating: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMovies([...movies, { ...form, id: Date.now() }]);

    setForm({
      title: "",
      genre: "",
      releaseDate: "",
      year: "",
      director: "",
      rating: ""
    });

    alert("Movie added successfully!");
  };

  return (
    <div className="app">

      <nav className="navbar">
        <h2>🎬 MovieClub</h2>
        <span>Movie Management System</span>
      </nav>

      <section className="hero">
        <h1>Welcome to Movie Club</h1>
        <p>Manage your favourite movies in one place.</p>
      </section>

      <section className="movie-form">
        <h2>➕ Add New Movie</h2>

        <form onSubmit={handleSubmit}>

          <label>Movie Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter movie title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <label>Movie Genre</label>
          <select
            name="genre"
            value={form.genre}
            onChange={handleChange}
            required
          >
            <option value="">Select Genre</option>
            <option>Action</option>
            <option>Comedy</option>
            <option>Drama</option>
            <option>Romance</option>
            <option>Thriller</option>
            <option>Horror</option>
            <option>Sci-Fi</option>
            <option>Animation</option>
          </select>

          <label>Release Date</label>
          <input
            type="date"
            name="releaseDate"
            value={form.releaseDate}
            onChange={handleChange}
            required
          />

          <label>Release Year</label>
          <input
            type="number"
            name="year"
            placeholder="Enter release year"
            min="1900"
            max="2100"
            value={form.year}
            onChange={handleChange}
            required
          />

          <label>Director Name</label>
          <input
            type="text"
            name="director"
            placeholder="Enter director name"
            value={form.director}
            onChange={handleChange}
            required
          />

          <label>Movie Rating (0-10)</label>
          <input
            type="number"
            name="rating"
            placeholder="Enter rating"
            min="0"
            max="10"
            step="0.1"
            value={form.rating}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Movie</button>

        </form>
      </section>

      <section className="movie-list">
        <h2>🎥 Movie Records</h2>

        {movies.length === 0 ? (
          <p>No movies added yet.</p>
        ) : (
          movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Release Date: {movie.releaseDate}</p>
              <p>Year: {movie.year}</p>
              <p>Director: {movie.director}</p>
              <p>Rating: ⭐ {movie.rating}/10</p>
            </div>
          ))
        )}
      </section>

      <footer>
        <p>© 2026 MovieClub Management System</p>
      </footer>

    </div>
  );
}

export default App;
