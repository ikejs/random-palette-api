exports.getRandomHSL = ((req, res) => {
  res.send({
      1: "#A9AA2F",
      2: "#C77D15",
      3: "#7E2F1D",
      4: "#8A2918",
      5: "#36181B"
    });
});

exports.getRandomHSLfromHEX = ((req, res) => {
  res.send({
      1: "#A9AA2F",
      2: "#C77D15",
      3: `#${req.params.HEX}`,
      4: "#8A2918",
      5: "#36181B"
    });
});