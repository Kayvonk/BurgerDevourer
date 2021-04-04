// Import MySQL connection.
const connection = require('./connection.js');

// Helper function for SQL syntax to add question marks (?, ?, ?) in query
const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
};


// Object for all our SQL statement functions.
const orm = {
    all(tableInput, cb) {
        const queryString = `SELECT * FROM ??`;
        connection.query(queryString, tableInput, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create(table, data, cb) {
        let queryString = `INSERT INTO ?? SET ?`;

        console.log(queryString);

        connection.query(queryString, [table, data], (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    update(table, objColVals, condition, cb) {
        let queryString = `UPDATE ?? SET ? WHERE ?`;


        console.log(queryString);
        connection.query(queryString, [table, objColVals, condition], (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // delete(table, condition, cb) {
    //     let queryString = `DELETE FROM ${table}`;
    //     queryString += ' WHERE ';
    //     queryString += condition;

    //     connection.query(queryString, (err, result) => {
    //         if (err) {
    //             throw err;
    //         }

    //         cb(result);
    //     });
    // },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
