const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#060072',
              '@text-color': '#060072',
              '@text-color-secondary': '#010017',
              '@font-size-base': '15px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
