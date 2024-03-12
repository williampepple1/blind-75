import glob from 'fast-glob'
import * as path from 'path'

async function importString(stringFilename) {
  let { meta, default: component } = await import(
    `../pages/strings/${stringFilename}`
  )
  return {
    slug: stringFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllStrings() {
  let stringFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/strings'),
  })

  let strings = await Promise.all(stringFilenames.map(importString))

  return strings.sort((a, z) => new Date(z.date) - new Date(a.date))
}
