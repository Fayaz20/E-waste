const express = require('express');
const { createUser } = require('../Models/user_model');
const router = express.Router();

router.post('/g',async(req,res)=>{
    console.log("df");
})

router.post('/reg', async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
      // Validate email and pass
      const result = await createUser(email, password);
      res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating user' });
    }
  });

  module.exports = router;
