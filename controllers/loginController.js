/**
 * Created on 22/09/2017.
 */
//var users      = require(__base + "models/user");
/*var utils      = require(__base + "resources/js/utils");*/
md5 = require(__base + 'node_modules/js-md5');

var loginController = function(app, config, fs) {
    /*show home page with login*/
    app.get(config.url.home, function(req, res) {
        /*check sesson user login*/
        var sess = req.sltcore;

        if(sess && sess.user){
            var user = sess.user;
        }else{
            /*store current url for redirect after login*/
            sess.backURL = req.url;
            sess.backURL = config.url.user.profile;
            /*go to login page*/
            res.redirect( config.url.login );
        }
    });

    /*get login page*/
    app.get(config.url.login, function(req, res){
        var sess = req.sltcore;
        var backURL = config.url.user.profile;
        if(sess && sess.backURL)
            backURL = sess.backURL;

        res.render('commons/login', {
            url_login      : config.url.login,
            title          : config.title.login,
            footer         : config.footer,
            url            : config.url
        });
    });
};

module.exports.controller = loginController;