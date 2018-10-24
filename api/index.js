const express = require("express");
const router = express.Router();
const { errors } = require("celebrate");

const app = express();
const routes = require("./routes");

app.use("/", routes(router));
app.use(errors);

app.listen(process.env.PORT || 8000);

// app.get('/products', function(req, res){
// return res.json([
// 	{
// 		_id:'1'	,
// 		name:'Thing A'
// 	}, {
// 		id:'2',
// 		name: 'Thing B'
// 	}
// ])
// });
