const express = require("express");
const router = express.Router();

router.get('/job', (req, res) => {
  res.send(`<h1>Job page --- startTime:${req.startTime}</h1>`)
})

module.exports = router;
