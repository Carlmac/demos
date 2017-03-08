app.get('/getMsg', function (req, res) {

	data = {};

	data.msg = 'Origin Crossing Succeeded with CORS';

	res.header("Access-Control-Allow-Origin", "http://a.example.com:8080")
	res.send(JSON.stringify(data));

})
