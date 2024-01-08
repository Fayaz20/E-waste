const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Akilan@21',
  database: 'ewaste',
});

async function createEwaste(ewaste_data) {
  
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO ewaste (email, password) VALUES (?, ?)',
      [email, hashedPassword],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      }
    );
  });
}

module.exports = {
  createEwaste,
};
