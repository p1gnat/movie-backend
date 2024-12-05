module.exports = (req, res, movies) => {
  const selectedMovie = movies.find((elem) => elem.id == req.params.id);
  if (!selectedMovie) {
    res.status(404).json({
      status: "fail",
      message: `failed to find elem with id: ${req.params.id}`,
    });
  } else {
    res.status(200).json({
      status: "success",
      data: {
        movies: selectedMovie,
      },
    });
  }
};
