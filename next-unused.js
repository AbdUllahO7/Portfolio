// next-unused.js
module.exports = {
    // Specify directories where the tool should look for files
    directory: [
        'pages',
        'components',
        'lib',
        'utils',
        'hooks',
        'styles'
    ],
    // Add files/patterns to exclude
    exclude: [
        'node_modules',
        '.next',
        'public',
        '*.test.*',
        '*.spec.*'
    ],
    entrypoints: [
        'pages'
    ]
  };