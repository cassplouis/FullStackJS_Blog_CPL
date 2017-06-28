var r = require("./routes.json");
var controllers = {
   pages: require("./controllers/pages"),
   session: require("./controllers/session"),
   blogCtrl: require("./controllers/blogCtrl")
};

module.exports = function(app, passport){

  	/*app.get(r.home, controllers.pages.home);
//check if user is logged in*/
  	app.get(r.login, controllers.pages.login);
//if not, rerouted to login route
  	app.get(r.index, controllers.session, controllers.pages.index);

  	app.get(r.post, controllers.session, controllers.pages.post);

  	app.get(r.create, controllers.session, controllers.blogCtrl.createPage);

  	app.get(r.update, controllers.session, controllers.blogCtrl.updatePage);

  	app.post(r.signup, controllers.pages.signup);

//passport will handle login using middleware; passport will authenticate for us
//check for user, if not-redirect to signup, if yes-redirect to login.  
	app.post(r.login, passport. authenticate("local-login", {
		successRedirect: r.index, 
		failureRedirect: r.login
	}));

	app.post(r.create, controllers.session, controllers.blogCtrl.createPage);

	app.put(r.update, controllers.session, controllers.blogCtrl.updatePage);

	app.delete(r.delete, controllers.session, controllers.blogCtrl.delete);

}