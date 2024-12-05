const fs = require("fs");

module.exports = (req, res, movies) => {
  const deleteMovie = movies.find((elem) => elem.id == req.params.id);

  if (deleteMovie) {
    const index = movies.indexOf(deleteMovie);
    movies.splice(index, 1);

    fs.writeFile("./files/movies.json", JSON.stringify(movies), (err) => {
      if (err) {
        res.status(400).json({
          status: "fail",
          message: `failed to delete element`,
        });
      } else {
        res.status(201).json({
          status: "success",
          data: {
            deleted: deleteMovie,
          },
        });
      }
    });
  } else {
    res.status(404).json({
      status: "fail",
      message: `failed to find delete with id: ${req.params.id}, cause it's not existing`,
    });
  }
};
