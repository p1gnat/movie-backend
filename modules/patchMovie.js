const fs = require("fs");

module.exports = (req, res, movies) => {
  const selectedPatchMovie = movies.find((elem) => elem.id == req.params.id);

  if (selectedPatchMovie) {
    const index = movies.indexOf(selectedPatchMovie);
    const patchedMovie = Object.assign(selectedPatchMovie, req.body);

    movies[index] = patchedMovie;

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
            patched: patchedMovie,
            patch: req.body,
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
