let employees = require('../data/employees.js');

module.exports = function (app) {

    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });

    app.post('/api/employees', function (req, res) {
        // Logic to handle incoming survey request & compatibility    
        const data = req.body;
        console.log(data);
        res.end();
    });
};