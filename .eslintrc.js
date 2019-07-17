module.exports = {
  root: true,
  extends: [
    'prettier',
    'prettier/react',
    '@react-native-community',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [0, {}, {
      'singleQuote': true,
      'usePrettierrc': false,
      'parser': 'flow'
    }],
    "max-len": ["error", {"code": 100}],
    "prefer-promise-reject-errors": ["off"],
    "react/jsx-filename-extension": ["off"],
    "react/prop-types": ["warn"],
    "no-return-assign": ["off"],
    "react/sort-comp": [1, {
      order: [
        'type-annotations',
        'static-methods',
        'instance-variables',
        // 'instance-methods',
        'lifecycle',
        '/^on.+$/',
        'everything-else',
        'rendering',
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render'
        ],
      },
    }],
  },
};
