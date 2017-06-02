var r = require("./routes.json");
var controllers = {
   pages: require("./controllers")

module.exports = function(app, passport){

  	app.get(r.index, controllers.pages.index)

  