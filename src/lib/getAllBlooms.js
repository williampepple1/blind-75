import glob from 'fast-glob'
import * as path from 'path'

async function importBloom(bloomFilename) {
  let { meta, default: component } = await import(
    `../pages/blooms/${bloomFilename}`
  )
  return {
    slug: bloomFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllBlooms() {
  let bloomFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/blooms'),
  })

  let blooms = await Promise.all(bloomFilenames.map(importBloom))

  return blooms.sort((a, z) => new Date(z.date) - new Date(a.date))
}
