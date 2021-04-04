// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    all(cb) {
        orm.all('burgers', cb);
    },
    // The variables cols and vals are arrays.
    create(data, cb) {
        orm.create('burgers', data, cb);
    },
    update(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, cb);
    },
    // delete(condition, cb) {
    //     orm.delete('burgers', condition, cb);
    // },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
