const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        1: "#A9AA2F",
        2: "#C77D15",
        3: "#7E2F1D",
        4: "#8A2918",
        5: "#36181B"
      });
});

router.get('/:colorCode', (req, res) => {
    res.send({
        1: "#A9AA2F",
        2: "#C77D15",
        3: `#${req.params.colorCode}`,
        4: "#8A2918",
        5: "#36181B"
      });
});


module.exports = router