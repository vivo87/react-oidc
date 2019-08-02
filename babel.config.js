module.exports = api => {
  api.cache.never();
  return {
    presets: ['@babel/env', '@babel/react'],
    plugins: [
      'babel-plugin-macros',
      [
        '@babel/plugin-transform-runtime',
        {
          regenerator: true,
        },
      ],
      '@babel/plugin-proposal-class-properties',
    ],
  };
};