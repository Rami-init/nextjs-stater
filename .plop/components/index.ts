module.exports = {
    description: 'Creates a new component',
    prompts: [
      {
        type: 'list',
        name: 'componentType',
        message: '🎪 What component do you want to create?',
        choices: ['ui', 'layouts', 'templates']
      },
      {
        type: 'input',
        name: 'name',
        message: ' What is the name of the component?'
      }
    ],
    actions: [
      // component
      {
        type: 'add',
        path: '../src/components/{{componentType}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      // storybook
      {
        type: 'add',
        path: '../src/stories/{{componentType}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      // tests
      {
        type: 'add',
        path: '../__test__/{{componentType}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  };