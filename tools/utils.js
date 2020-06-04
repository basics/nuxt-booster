import { paramCase } from 'change-case'

export function getArg (name) {
  name = paramCase(name)
  const args = process.argv.slice(2)
  let value = !!args[args.indexOf(`--${name}`)]
  if (args.includes(`--${name}`) && args[args.indexOf(`--${name}`) + 1]) {
    value = args[args.indexOf(`--${name}`) + 1]
  }
  return value
}
