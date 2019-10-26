const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// one argument = fetch, two arguments = load something in
const User = mongoose.model('users');

//store user into cookie as id
//user is whatever we just pulled out of the DB
// user.id -> id assigned to record by mongo (enable auth for diff types of strategies bc mongo will always give ID)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//pulling id out of cookie to turn into user
passport.deserializeUser((id, done) =>{
    User.findById(id).then(user => {
            done(null, user);
        });
});

//take passport library and make use of GoogleStrategy 
// google strategy - has internal code can use 'google'
passport.use
    (new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback' //route user is sent to after permision granted
    }, 

    //Store access token in DB
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id}) //check if user exist in DB

        if(existingUser) {
            //we already have a record with given profile ID
            return done(null, existingUser);
        } 
        
        // we dont have a user with this ID make a new record
        const user = await new User({ googleId: profile.id, points: 10000}).save() //take model instance and save to DB
        done(null, user);
        }
    )
);
