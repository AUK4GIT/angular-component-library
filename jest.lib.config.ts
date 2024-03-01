const baseConfig = require('./jest.config');

module.exports = {
  ...baseConfig,
  roots: ['<rootDir>/projects/weather-components-ui/src/lib'],
};
