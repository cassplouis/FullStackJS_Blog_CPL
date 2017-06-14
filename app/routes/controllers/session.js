//not user tries to log in, they are redirected to the log in page 
module.exports = function(req, res, next){
	if(!req.user){
		res.redirect("/login");
	} else {
	  next();
	}
}