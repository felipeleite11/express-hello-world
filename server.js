const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	return res.json({
		response: 'IT\'S WORKING!'
	})
})

app.listen(8080, () => {
	console.log('App executing on http://localhost:8080')
})