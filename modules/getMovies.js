module.exports = (req, res, movies) => {
  res.status(200).json({
    status: "success",
    data: {
      movies: movies,
    },
  });
};
