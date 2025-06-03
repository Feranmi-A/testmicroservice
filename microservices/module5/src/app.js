const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static under /module5
app.use('/module5', express.static(path.join(__dirname, '../public')));

app.get('/module5/api/v1/info', (req, res) => {
  res.json({ name: "Module 5 Service", description: "React + Node.js + MongoDB" });
});

app.get('/module5/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => console.log(`Module5 running on port ${PORT}`));
