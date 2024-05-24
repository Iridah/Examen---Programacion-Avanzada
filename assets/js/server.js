import express from 'express';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../../')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

app.get('/animales', (req, res) => {
  res.sendFile(path.join(__dirname, '../../animales.json'));
});

app.listen(port, () => {
  console.log(chalk.green(`Server is running on http://localhost:${port}`));
});
