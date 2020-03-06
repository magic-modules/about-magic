export const View = () =>
  div({ class: 'AboutMagic' }, [
    h2([Link({ text: '@magic', to: 'https://magic.github.io' }), ' is']),

    h3(['a ', Link({ text: 'jamstack', to: 'https://jamstack.org/' }), ':']),
    p([b('j'), 'avascript, ', b('a'), 'pis and (static) ', b('m'), 'arkup.']),

    h3('minimal:'),
    p('less than 15kb of html + css + javascript boilerplate.'),

    h3('modular:'),
    p('separation of concerns makes customization easy.'),

    h3('"jsomorphic":'),
    p('html loads first and provides basic functionality, javascript enhances where needed.'),

    h3('full stack:'),
    p([
      'if needed, @magic generates server side apis, and ',
      Link({ text: '@grundstein', to: 'https://grundstein.it' }),
      ' will soon take care of hosting said app bundles',
    ]),

    GitBadges('magic/core'),
  ])

export const style = {
  h3: {
    fontSize: '1.1em',
    padding: '0.2em 0 0',
  },
}
