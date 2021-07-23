const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // res.send('Hello World!');
  const todos = [
    {
      id: 1,
      task: 'study nuxt.js',
      isDone: false,
    },
    {
      id: 2,
      task: 'study express.js',
      isDone: false,
    },
    {
      id: 3,
      task: 'study typescript.js',
      isDone: false,
    },
  ];
  res.json(todos);
});
module.exports = router;
