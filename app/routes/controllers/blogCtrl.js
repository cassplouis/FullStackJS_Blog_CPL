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

function today(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    return {
        month: month, 
        year: year,
        day: day
    }
}

//create: rendering create page with username; update: grabbing post query, getting id, searching through database to find document with id; error will yield console.log, if not, will be rendered. 
var blogPages = {
    create: function(req, res){
        res.render("create", {
            user: req.user.username
        });
    },
    update: functin(req,res){
        Post.findOne({"_id": req.query.post}, function(err, post){
            if(err){
                console.log(err);
            } else {
                res.render("update", {
                    post: post
                });
            }
        });
    },

    

function createBlogPost(req, res){
    new Post({
        title: req.body.blogTitle,
        post: req.body.postBody,
        date: {
            month: today().month,
            day: today().day,
            year: today().year
        },
        user: req.user.username
    }).save(function(err){
        if(err){
            console.log(err);
        } else {
            res.redirect("/index");
        }
    })
}

//front end, link with a tag & query, query name= post id, grab all information; find post
function updateBlogPost(req, res){
    Post.update({"_id": req.query.id},  {$set: {"post": req.body.postBody, "title": req.body.blogTitle}}, function(err, doc){
        console.log(doc);
        if(err){
            res.redirect("/index?update=fail");
        } else {
            res.redirect("/index?update=success");
        }
    });
}

//two options: let mongodb generate, or use your own
function deleteBlogPost(req, res){
    Post.remove({"_id" req.query.post}, function(err, post){
        if(err){
            console.log(err);
        } else {
            res.redirect("/index");
        }
    });
}

exports.create = createBlogPost;
exports.create = updateBlogPost;
exports.create = deleteBlogPost;

exports.createPage = blogPages.create;
exports.updatePage = blogPages.update;