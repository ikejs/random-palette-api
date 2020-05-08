const hsl = require('hsl-to-hex');


exports.getRandomHSL = ((req, res) => {
  // base color
  const h = Math.round(Math.random() * 360)
  const s = Math.round(Math.random() * 100)
  const l = Math.round(Math.random() * 50)

  // hue varieties
  const h2 = (h + 20) % 360
  const h1 = (h + 90) % 360
  const h4 = (h + 180) % 360
  const h3 = (h + 340) % 360

  res.json({
    first: {
      hsl: `hsl(${h1}, ${s}%, ${l}%)`,
      hex: hsl(h1, s, l)
    },
    second: {
      hsl: `hsl(${h2}, ${s}%, ${l}%)`,
      hex: hsl(h2, s, l)
    },
    third: {
      hsl: `hsl(${h}, ${s}%, ${l}%)`,
      hex: hsl(h, s, l)
    },
    fourth: {
      hsl: `hsl(${h3}, ${s}%, ${l}%)`,
      hex: hsl(h3, s, l)
    },
    fifth: {
      hsl: `hsl(${h4}, ${s}%, ${l}%)`,
      hex: hsl(h4, s, l)
    }
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