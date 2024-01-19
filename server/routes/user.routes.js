import express from require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

export default router;