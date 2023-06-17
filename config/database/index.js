let Sequelize = require('sequelize');
let db = new Sequelize(process.env.DB_SCEM, process.env.DB_USER, process.env.DB_PASS, {
	dialect: process.env.DB_DIALECT,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	logging: false,
	pool: {
		max: 200,
		min: 0,
		idle: 20000,
		acquire: 200000
	}
});

db.authenticate()
	.then(() => {
		console.log('Connection database has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

module.exports = db;