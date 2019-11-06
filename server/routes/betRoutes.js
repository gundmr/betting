const User = require('../models/User');

module.exports = (app) => {
	app.post('/api/bet', (req, res) => {
		User.findOneAndUpdate({ _id: "5dc22b2a2f98e95cb5cfbb04" }, req.body)
			.then((item) => {
				console.log(item);
				res.send('bet saved to database');
			})
			.catch((err) => {
				res.status(400).send('unable to save to database');
			});
    });

    
    
};

//need to add in middleware for requireLogin and requirePoints
//     app.post('/api/bet', requirePoints, (req, res) => {
//         const updatePoints = new Points({
//             betPoints: req.body.betPoints //how to id points
//         });

//         updatePoints.save().then(betPoints => res.json(betPoints));
//         console.log('new pts:', betPoints);
//     });
