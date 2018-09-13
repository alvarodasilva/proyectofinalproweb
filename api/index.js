const express = require('express');

const app = express();

app.get('/products', function(req, res){
	return res.json([
		{
			_id:'1'	,
			name:'Thing A'
		}, {
			id:'2',
			name: 'Thing B'
		}
	])
});


app.listen(process.env.PORT || 8000);