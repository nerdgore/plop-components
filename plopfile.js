// Handlebars escapes:
// { = &#123;
// } = &#125;

module.exports = function (plop) {
  plop.addHelper('cwd', p => process.cwd())

  plop.setGenerator('React Component', {
    description: 'Create a react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      },
      {
        type: 'input',
        name: 'destinationFolder',
        message: 'Path to destination folder?'
      },
      {
        type: 'confirm',
        name: 'withState',
        message: 'Use Redux?',
        default: false
      },
      {
        type: 'confirm',
        name: 'withCss',
        message: 'Use CSS Modules?',
        default: false
      }
    ],
    actions: input => {
      const pathExcludes = []
      if (!input.withState) {
        pathExcludes.push('actions', 'withState')
      }
      if (!input.withCss) {
        pathExcludes.push('style')
      }
      const filePattern = pathExcludes.length
        ? `!(${pathExcludes.join('|')})`
        : '*'
      const templatePath = `templates/component/**/${filePattern}.*`

      const data = {
        ComponentName: plop.renderString('{{properCase name}}', input)
      }

      return [
        {
          type: 'addMany',
          base: `templates/component`,
          skipIfExists: true,
          data: data,
          templateFiles: templatePath,
          destination: '{{cwd}}/{{destinationFolder}}/{{ComponentName}}'
        }
      ]
    }
  })
}
