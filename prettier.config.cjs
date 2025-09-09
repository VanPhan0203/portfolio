module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  vueIndentScriptAndStyle: true,
  plugins: ['prettier-plugin-organize-imports', '@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^vue(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^[./].*vue$',
    '^[./].*ts$',
    '^[./].*js$',
    '^[./].*css$',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  overrides: [
    {
      files: '*.vue',
      options: {
        parser: 'vue',
        vueIndentScriptAndStyle: true
      }
    }
  ]
}
