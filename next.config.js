const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const nextConfig = {

};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};