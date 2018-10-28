let employees = require('../data/employees.js');

module.exports = function (app) {
    app.get('/api/employees', function (req, res) {
        res.json(employees);
    });

    app.post('/api/employees', function (req, res) {
        // Logic to handle incoming survey request & compatibility    
        const data = req.body;
        let dataArray = [data.q1, data.q2, data.q3, data.q4, data.q5, data.q6, data.q7, data.q8, data.q9, data.q10];

        //Compatibility Logic
        let closestMatch = {
            name : 'test',
            photo: 'test',
            total_difference: 1000
        };

        for (let i = 0; i < employees.length; i++) {
            let currentDifferential = 0;
            const currentEmployeeScores = employees[i].scores;
            let differential = 0;

            for (let j = 0; j < currentEmployeeScores.length; j++) {
                currentDifferential = currentEmployeeScores[j] - dataArray[j];
                differential += Math.abs(currentDifferential);
            }

            if (differential < closestMatch.total_difference){
                closestMatch.name = employees[i].name;
                closestMatch.photo = employees[i].photo;
                closestMatch.total_difference = differential;
            }
        }
        res.json(closestMatch);        
        res.end();
    });
};