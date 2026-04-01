const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date(), uptime: process.uptime() });
});

app.get("/api/activities", (req, res) => {
  res.json([]);
});

<<<<<<< HEAD
app.get("/api/users", (req, res) => {
  res.json([]);
});

<<<<<<< HEAD
app.listen(3000, () => console.log("VitalSync API on :3000"));
=======
app.listen(3000, () => console.log("API sur :3000"));
>>>>>>> feature/add-endpoint
=======
app.listen(3000, () => console.log("VitalSync API on :3000"));
>>>>>>> feature/update-health
