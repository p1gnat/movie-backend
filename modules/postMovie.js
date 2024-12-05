const fs = require("fs");

module.exports = (req, res, movies) => {
  let newId = 0;
  if (movies.length) {
    newId = movies[movies.length - 1].id + 1;
  } else {
    newId = 1;
  }

  const createdMovie = Object.assign({ id: newId }, req.body);

  movies.push(createdMovie);
  fs.writeFile("./files/movies.json", JSON.stringify(movies), (err) => {
    if (err) {
      res.status(400).json({
        status: "fail",
        message: `failed to create element`,
      });
    } else {
      res.status(201).json({
        status: "success",
        data: {
          movies: createdMovie,
        },
      });
    }
  });
};
