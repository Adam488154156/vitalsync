// VitalSync API - Backend Express
const express = require("express");
const app = express();

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date(), uptime: process.uptime(), version: "1.0" });
});

// Activities endpoint
app.get("/api/activities", (req, res) => {
  res.json([]);
});

// Users endpoint
app.get("/api/users", (req, res) => {
  res.json([]);
});

app.listen(3000, () => console.log("VitalSync API on :3000"));