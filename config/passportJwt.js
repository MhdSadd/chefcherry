const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const {Admin} = require("../models/admin.js");

let opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    Admin.findById(jwt_payload.id, function(err, user) {
        if(err)
        return done(err, false);
        if(user) {
            // console.log("from passportJwt file...");
            // console.log(user);
            return done(null, user);
        }
        else
        return done(null, false);
    })
}))

