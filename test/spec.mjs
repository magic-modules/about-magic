import { is, version } from '@magic/test'
import * as AboutMagic from '../src/index.mjs'

const spec = {
  View: 'fn',
  style: ['obj', false],
}

export default version(AboutMagic, spec)
