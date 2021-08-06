const express = require('express');
const project = require('./routes/project');
const connect = require('./config/db');
const cor = require('cors');

const PORT = 4000;

const app = express();
connect();

app.use(cor());
// body parser
app.use(express.json({ extended: false }));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

app.use('/api/projects', project);

app.get('/', (req, res) => {
  res.send('Hey');
});
