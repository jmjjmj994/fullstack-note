import express from 'express';
import 'dotenv';
import cors from 'cors';
const app = express();
app.use(express.stacit('dist'));
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
let notes = [
  {
    notes: [
      {
        id: 1,
        content: 'HTML is easy',
        important: true,
      },
      {
        id: 2,
        content: 'Browser can execute only JavaScript',
        important: false,
      },
      {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        important: true,
      },
    ],
  },
];

app.get('/', (request, response) => {
  response.send('Hello world');
});

app.get('/api/notes', (request, response) => {
  response.json(notes);
});

app.listen(PORT, () => {
  console.log('Server started at', PORT);
});
