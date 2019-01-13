const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})

const config = {
	views: 'views', 		
	static: 'public', 		
	db: { 		// Database configuration. Check the .env file 
		url: (process.env.TURBO_ENV=='dev') ? process.env.MONGODB_URI : process.env.PROD_MONGODB_URI,
		type: 'mongo',
		onError: (err) => {
			console.log('DB Connection Failed!')
		},
		onSuccess: () => {
			console.log('FOOTBALL DB CONNECTED!')
		}
	}
}

const app = vertex.app(config)

// import routes
const index = require('./routes/index')
const api = require('./routes/api')

// set routes
app.use('/', index)
app.use('/api', api) 


module.exports = app