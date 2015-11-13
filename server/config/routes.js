  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)

// First at the top of your routes.js file you'll have to require the controller
var friends = require('./../controllers/friends.js');

module.exports = function(app) {
   
	 // modify the route to look like this
	app.get('/friends', function(req, res) {
		friends.show(req, res);
	})

	app.post('/friends', function(req, res) {
		console.log("In /friends post method in routes.js", req.body);
		friends.add(req, res);
	})

	app.delete('/friends/:id', function(req, res){
		console.log('in /friends/id delete method in routes.js', req.params.id);
		friends.destroy(req,res);
	})
};
	// note how we are delegating to the controller and passing along req and res