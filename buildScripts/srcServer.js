const express = require('express')
	, path = require('path')
	, open = require('open');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(PORT, (err) => {
	if (err)
		console.log(err);
	else
		console.log('http://localhost:'+ PORT);
});