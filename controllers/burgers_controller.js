const express = require('express');

const router = express.Router();

// Import the model to use its database functions.
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data,
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body, (result) => {
        console.log(result)
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    burger.update(
        {
            devoured: req.body.devoured,
        },
        { id: req.params.id },
        (result) => {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// router.delete('/api/burgers/:id', (req, res) => {
//     const condition = `id = ${req.params.id}`;

//     burger.delete(condition, (result) => {
//         if (result.affectedRows === 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         }
//         res.status(200).end();
//     });
// });

// Export routes for server.js to use.
module.exports = router;
