const passport = require('passport');

module.exports = app => {

    //when user comes to 'auth/google' attempt to authenticate user coming in on the route and use google
    //scope tells google servers what we are looking for: can find scopes that are provided by google
    app.get('/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
            })
    );

    //Exchange code for actual user profile; put user on hold, take 'code' from the URL
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google'), 
        (req, res) => {
            //update to /home
            res.redirect('/');
        }
    );

    app.get('/api/logout', (req, res) => {
        // will kill the cookies in session
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};

