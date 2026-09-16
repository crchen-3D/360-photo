import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from root directory
app.use(express.static(__dirname));

// Primary routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route aliases for convenience
app.get('/360', (req, res) => {
  res.sendFile(path.join(__dirname, '360_全景瀏覽器_進階版.html'));
});

app.get('/calc', (req, res) => {
  res.sendFile(path.join(__dirname, '板材撓性變形計算機.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
