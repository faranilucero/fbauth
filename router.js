const path = require("path");
const router = require("express").Router();

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "test.html"))
);

router.use("/success", function(req, res) =>
  res.sendFile(path.join(__dirname, "success.html"))
);

module.exports = router;
