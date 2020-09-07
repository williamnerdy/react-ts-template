module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile: 'templates/Component.scss.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/Component.stories.tsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/Component.test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.ts.hbs'
      }
    ]
  }),
    plop.setGenerator('page', {
      description: 'Create a page',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your page name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/Page.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'templates/Page.test.tsx.hbs'
        },
        {
          type: 'add',
          path: '../src/pages/{{pascalCase name}}/index.ts',
          templateFile: 'templates/index.ts.hbs'
        }
      ]
    });
};
