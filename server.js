const express = require('express');
const path = require('path');

const app = express();
const port = Number(process.env.PORT) || 3000;

app.disable('x-powered-by');

// Serve static files from root
app.use(express.static(path.join(__dirname, '.')));

app.get('/health', (_req, res) => {
  res.json({ ok: true, app: 'zart-messenger' });
});

// Serve index.html for all routes (SPA)
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Zart Messenger is running on port ${port}`);
});
