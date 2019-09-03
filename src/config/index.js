const config = {
  production: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: process.env.APP_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  staging: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: process.env.APP_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  development: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: process.env.APP_SECRET,
    MONGODB_URI: 'mongodb://localhost/tour',
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  testing: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: process.env.APP_SECRET,
    MONGODB_URI: '',
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  default: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: process.env.APP_SECRET,
    MONGODB_URI: 'mongodb://localhost/tour',
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
