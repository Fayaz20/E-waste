const express = require('express');
const app = express();
const mysql = require('mysql2');
const userRouter = require('./Routers/user');
const notifyRouter = require('./Routers/ewaste');
const port = 3000;

app.use(express.json());

app.use('/auth', userRouter);
app.use('/notify',notifyRouter);

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306, 
    user: 'root',
    password: 'Akilan@21',
    database: 'ewaste'      
  });

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
