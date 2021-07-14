const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // res.send('Hello World!');
  const todos = [
    {
      id: 1,
      taskName: 'study nuxt.js',
      isDone: false,
    },
    {
      id: 2,
      taskName: 'study express.js',
      isDone: false,
    },
    {
      id: 3,
      taskName: 'study typescript.js',
      isDone: false,
    },
  ];
  res.json(todos);
});
module.exports = router;
