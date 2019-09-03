
const config = {
  production: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: 'someappsecrethere',
    MONGO_URL: '',
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: '124638225596-lqhcnuatcp1d3ne1kri0p51emtrepms5.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: 'LKXIx-SeObUrCnx9Ac3GA7OQ',
  },
  staging: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: 'someappsecrethere',
    MONGO_URL: '',
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: '124638225596-lqhcnuatcp1d3ne1kri0p51emtrepms5.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: 'LKXIx-SeObUrCnx9Ac3GA7OQ',
  },
  development: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: 'someappsecrethere',
    MONGO_URL: 'mongodb://localhost/tour',
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: '124638225596-lqhcnuatcp1d3ne1kri0p51emtrepms5.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: 'LKXIx-SeObUrCnx9Ac3GA7OQ',
  },
  default: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: 'someappsecrethere',
    MONGO_URL: 'mongodb://localhost/tour',
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: '124638225596-lqhcnuatcp1d3ne1kri0p51emtrepms5.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: 'LKXIx-SeObUrCnx9Ac3GA7OQ',
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
