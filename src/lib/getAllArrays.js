import glob from 'fast-glob'
import * as path from 'path'

async function importArray(arrayFilename) {
  let { meta, default: component } = await import(
    `../pages/arrays/${arrayFilename}`
  )
  return {
    slug: arrayFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArrays() {
  let arrayFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/arrays'),
  })

  let arrays = await Promise.all(arrayFilenames.map(importArray))

  return arrays.sort((a, z) => new Date(z.date) - new Date(a.date))
}
