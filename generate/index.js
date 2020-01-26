import { Nuxt, Builder, Generator } from 'nuxt'
import * as config from '../nuxt.config.js'

export default function (req, res) {
  const nuxt = new Nuxt(config)
  
  nuxt.hook('ready', (arg) => {
    console.log('nuxt ready', nuxt)
    const builder = new Builder(nuxt)
    builder.build()
    const generator = new Generator(nuxt, builder)
    generator.generate()
  })
  
  res.end()
}