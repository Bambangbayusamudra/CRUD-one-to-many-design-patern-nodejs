var config = {
	noAuthRoutes : [
		'/api/auth',
		'/api/auth/decode'
	],
	tokenExpiration:'2592000',
	secret:'1234',
	mysql: {
		connectionLimit: 100,
		host: 'localhost',
		username: 'root',
		password: '',
		database: 'relation'
	}
}

module.exports = config