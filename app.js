const express = require("express");
const path = require("path");

const app = express();

// Serve static files (index.html)
app.use(express.static(path.join(__dirname)));

// API for addition
app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.send("Please provide numbers like /add?a=1&b=2");
  }

  res.json({ result: a + b });
});

app.listen(3000, () => {
  console.log("Calculator running on port 3000");
});