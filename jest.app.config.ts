const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/my-weather-app/src'],
};
