const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/api/courses', (req, res) => {
  res.json([{ code: 'ECEN 201', title: 'Signals and Systems', credits: 3 }]);
});

app.post('/api/register', (req, res) => {
  res.json({ success: true, message: 'Registration saved', data: req.body });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));