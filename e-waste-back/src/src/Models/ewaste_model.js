const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Akilan@21',
    database: 'ewaste',
  });


  async function createEwaste(userData) {
    return new Promise((resolve, reject) => {
        
        const {ewastes, address, phno, location } = userData;
        pool.query(
            'INSERT INTO user_ewaste (ewastes, address, phno, location) VALUES (?, ?, ?, ?)',
            [ewastes, address, phno, location],
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


  