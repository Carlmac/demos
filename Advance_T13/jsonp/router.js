app.get('/getMsg', function (req, res) {

	data = 'Origin Crossing Succeeded with JSONP';

	var cb = req.query.callback;
	if (cb) {
		res.send(cb + '(' + JSON.stringify(data) + ');');
	} else {
		res.send(data);
	}


})
