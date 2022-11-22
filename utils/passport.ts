import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";

const config = useRuntimeConfig();

passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: "/api/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      done(null, profile);
    }
  )
);

export default passport;
