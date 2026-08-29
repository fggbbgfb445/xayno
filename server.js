const express = require('express');
const path = require('path');

const app = express();
const port = Number(process.env.PORT) || 3000;
const htmlFile = path.join(__dirname, 'dist', 'index.html');

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/health', (_req, res) => {
  res.json({ ok: true, app: 'zart-messenger' });
});

app.get('/manifest.webmanifest', (_req, res) => {
  res.sendFile(path.join(__dirname, 'manifest.webmanifest'));
});

app.get('/sw.js', (_req, res) => {
  res.sendFile(path.join(__dirname, 'sw.js'));
});

app.get('/', (_req, res) => {
  res.sendFile(htmlFile);
});

app.get('*', (_req, res) => {
  res.sendFile(htmlFile);
});

app.listen(port, () => {
  console.log(`Zart Messenger is running on port ${port}`);
});
