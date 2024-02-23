module.exports = {
    // ... other Jest configurations
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    }
  };