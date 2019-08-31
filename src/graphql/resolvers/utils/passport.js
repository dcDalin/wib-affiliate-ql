import passport from 'passport';
import config from '../../../config';

const ENV_VAR = config.get(process.env.NODE_ENV);

const { Strategy: GoogleTokenStrategy } = require('passport-google-token');

// GOOGLE STRATEGY
const GoogleTokenStrategyCallback = (accessToken, refreshToken, profile, done) => done(null, {
  accessToken,
  refreshToken,
  profile,
});

passport.use(
  new GoogleTokenStrategy(
    {
      clientID: ENV_VAR.GOOGLE_CLIENT_ID,
      clientSecret: ENV_VAR.GOOGLE_CLIENT_SECRET,
    },
    GoogleTokenStrategyCallback,
  ),
);

const authenticateGoogle = (req, res) => new Promise((resolve, reject) => {
  passport.authenticate('google-token', { session: false }, (err, data, info) => {
    if (err) reject(err);
    resolve({ data, info });
  })(req, res);
});

export default authenticateGoogle;
