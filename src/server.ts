import express from 'express';
import user from './user/userApi';
import db from './config/dbconfig';
import passport from "passport";
import FacebookStrategy from 'passport-facebook';
const Strategy = FacebookStrategy.Strategy;
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

const app = express();
const PORT = 8445;

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', user);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new Strategy(
    {
      clientID: "682390815912191",
      clientSecret: "2caac0bdbc87f612b3924cef5f6e01ba",
      callbackURL: "http://localhost:8445/user/auth/facebook/callback",
      profileFields: ["id", "displayName"]
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log("access => ",accessToken,"refresh =>",refreshToken,profile)
      const user = {};
      done(null, user);
    })
)

passport.use(new GoogleStrategy({
  clientID: "573709068382-033bnftmjl2fmtn1snmst4hhigo5a2ou.apps.googleusercontent.com",
  clientSecret: "JrIhQ2-OeI7ko6zytPLtYkDo",
  callbackURL: "http://localhost:8445/user/auth/google/callback"
},
  function (accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    const user = {};
    return cb(null, user);
    // });
  }
));

db.then(() => {
  console.log("connected");
})
  .catch((error) => {
    console.log(error)
  })
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at ${PORT}`);
});
