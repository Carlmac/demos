app.get('/more', function(req, res) {
	var startPos = req.query.start;
	startPos++;
	var arr = [];
	for (var i = 0; i < req.query.length; i++) {
		arr.push(startPos);
		startPos++;
	}
	res.send(arr);
});
