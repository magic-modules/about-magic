export const View = () =>
  div([
    h1(Link({ text: '@magic', to: 'https://magic.github.io' })),

    p('magic is a module based generator for interactive clients, apis and static pages.'),

    p(['this is also called a ', Link({ text: 'jamstack', to: 'https://jamstack.org/' }), ', javascript, apis and markup.']),

    p([
      'less than 15kb of html + css + javascript boilerplate means @magic is minimal,',
      'and the module based approach means that it is also easily extendable and customizable.',
    ]),

    p('most of @magic works without javascript.'),

    GitBadges('magic/core'),
  ])
