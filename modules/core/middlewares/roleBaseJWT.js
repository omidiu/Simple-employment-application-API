const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const { utilsConfig } = require(global.constAddress);

const JWTOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: utilsConfig.JWT_SECRET,
  passReqToCallback: true,
};

passport.use(
  "jwt",
  new JwtStrategy(JWTOpts, async (req, payload, done) => {
    try {
      const { role } = payload.user;

      if (!req.roles.includes(role)) return done(null, false);

      return done(null, payload.user);
    } catch (err) {
      return done(err, false);
    }
  })
);

const roleBasedJWT = (roles) => {
  return (req, res, next) => {
    req.roles = roles;
    return passport.authenticate("jwt", { session: false })(req, res, next);
  };
};

module.exports = roleBasedJWT;
