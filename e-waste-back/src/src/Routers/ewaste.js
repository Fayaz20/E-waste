const express = require('express');
const { createEwaste } = require('../Models/ewaste_model');
const mysql = require('mysql2');
const router = express.Router();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Akilan@21',
    database: 'ewaste',
});

router.post('/ewaste', async (req, res) => {
    try {
      console.log(req.body);
      const data = req.body;
      const userData = {
        "ewastes" : data.ewastes,
        "address" : data.address,
        "phno" : data.phno,
        "location" : data.location
      }

      const result = await createEwaste(userData);
      res.status(201).json({ message: 'Ewaste added successfully'});
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Error creating ewaste'});
    }
  });

  router.get("/ewaste", async (req, res) => {
    try {
        const query = 'SELECT * FROM user_ewaste'; 
        const [rows, fields] = await pool.promise().query(query);

        // Convert rows to JSON objects and add them to a list
        const jsonDataList = rows.map(row => {
            const jsonData = {};
            for (const field of fields) {
                jsonData[field.name] = row[field.name];
            }
            return jsonData;
        });

        res.status(200).json(jsonDataList); // Send the list of JSON objects as a JSON response
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

  module.exports = router;