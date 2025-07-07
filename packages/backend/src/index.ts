import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// simple chat endpoint placeholder
app.post('/api/chat', (req, res) => {
  res.json({ message: 'Chat endpoint placeholder' });
});

// RAG demo data endpoint
app.get('/api/data/:file', (req, res) => {
  const file = req.params.file;
  const filePath = path.join(__dirname, '../../data', `${file}.json`);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: 'Not found' });
  }
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});