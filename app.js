const express = require('express');
const app = express();

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