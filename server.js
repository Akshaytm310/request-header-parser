const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip,                        // client IP
    language: req.headers["accept-language"], // preferred language
    software: req.headers["user-agent"]       // system info
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
