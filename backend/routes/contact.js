const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`[Contact Form] ${name} (${email}): ${message}`);
  res.json({ message: 'Thanks for getting in touch! I’ll respond soon.' });
});

module.exports = router;
