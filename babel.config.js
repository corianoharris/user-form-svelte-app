module.exports = {
    presets: [
      '@babel/preset-env',   // for modern JavaScript support
      '@babel/preset-typescript',  // for TypeScript
    ],
    plugins: [
      '@babel/plugin-transform-modules-commonjs', // For compatibility with CommonJS
    ],
  };
  