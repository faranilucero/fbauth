const path = require("path");
const router = require("express").Router();

// If no API routes are hit, send the React app

router.use("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "login.html"))
);

router.use("/success", (req, res) =>
  res.sendFile(path.join(__dirname, "success.html"))
);

router.use("/", (req, res) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

module.exports = router;
