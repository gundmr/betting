const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); //becuase there is nothing to config we can just 'require'


//mongoose.connect(keys.mongoURI, { useUnifiedTopology: true });

// MongoDB URI - need this to connect too
const db = keys.mongoURI;


// CONNECT to mongo
mongoose.set('useUnifiedTopology', true);

mongoose
    .connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));



const app = express();


app.use(
    cookieSession ({
        //maxAge: how long cookie can last in browser before expiring (below saying 30days)
        //keys: to encrypt id
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

//require statement returns function in authRoutes
require('./routes/authRoutes')(app);

// adding dynamic port for heroku deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
