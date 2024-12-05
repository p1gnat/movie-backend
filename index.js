const fs = require("fs");
const cors = require("cors");
const express = require("express");
const getMovies = require("./modules/getMovies");
const getMovie = require("./modules/getMovie");
const postMovie = require("./modules/postMovie");
const deleteMovie = require("./modules/deleteMovie");
const patchMovie = require("./modules/patchMovie");

const app = express();
app.use(cors());
app.use(express.json());

const movies = JSON.parse(fs.readFileSync("./files/movies.json", "utf-8"));

app.get("/api/v2/movies", (req, res) => {
  getMovies(req, res, movies);
});

app.get("/api/v2/movies/:id", (req, res) => {
  getMovie(req, res, movies);
});

app.post("/api/v2/movies", (req, res) => {
  postMovie(req, res, movies);
});

app.delete("/api/v2/movies/:id", (req, res) => {
  deleteMovie(req, res, movies);
});

app.patch("/api/v2/movies/:id", (req, res) => {
  patchMovie(req, res, movies);
});

app.listen(8080, () => {
  console.log("server started");
});
