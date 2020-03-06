import { is } from '@magic/test'
import * as AboutMagic from '../src/index.mjs'

export default [
  {
    fn: () => AboutMagic.View,
    expect: is.function,
    info: 'expect .View to be a function',
  },
]
