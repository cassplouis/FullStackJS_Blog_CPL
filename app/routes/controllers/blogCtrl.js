
var post =require ("../..models/blogMOdel");

var newPost = function(req, res){
    new Post({
        title: req.body.blogTitle,
        post: req.body.postBody,
        /*date: {
            month: today().month,
            day: today().day,
            year: today().year
        },
        user: req.user.username*/
    }).save(function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect("/index")
        }
    });
}

