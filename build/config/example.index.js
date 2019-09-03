"use strict";

var config = {
  production: {
    APP_PORT: '4001',
    APP_SECRET: 'someappsecrethere',
    MONGO_URL: '',
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: '',
    GOOGLE_CLIENT_SECRET: ''
  },
  development: {
    APP_PORT: '4001',
    APP_SECRET: 'someappsecrethere',
    MONGO_URL: '',
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: '',
    GOOGLE_CLIENT_SECRET: ''
  },
  "default": {
    APP_PORT: '4001',
    APP_SECRET: 'someappsecrethere',
    MONGO_URL: '',
    PLAYGROUND: true,
    GOOGLE_CLIENT_ID: '',
    GOOGLE_CLIENT_SECRET: ''
  }
};

exports.get = function get(env) {
  return config[env] || config["default"];
};