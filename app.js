const express = require('express');
const app = express();
const morgan = require('morgan');
const nunjucks = require('nunjucks');

app.listen(3000, () => {
	console.log('server listening')
})

app.use((req, res, next) => {
	console.log('doing this for every incoming requset');
})

app.get('/', (res, req) => {
	req.send('Welcome!');
})

//what does res.json do?

//req.params object that contains all of the keys that we've placed on our...?