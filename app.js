const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.status(404).json({ message: 'path not found on this server' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

const port = 8000;
app.listen(port, () => console.log(`server running on port ${port}`));
