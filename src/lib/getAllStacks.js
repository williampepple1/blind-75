import glob from 'fast-glob'
import * as path from 'path'

async function importStack(stackFilename) {
  let { meta, default: component } = await import(
    `../pages/stacks/${stackFilename}`
  )
  return {
    slug: stackFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllStacks() {
  let stackFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/stacks'),
  })

  let stacks = await Promise.all(stackFilenames.map(importStack))

  return stacks.sort((a, z) => new Date(z.date) - new Date(a.date))
}
