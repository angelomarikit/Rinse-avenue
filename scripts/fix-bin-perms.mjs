import { chmodSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

/** Ensures node_modules/.bin shims are executable on Linux (e.g. Vercel). */
if (process.platform === 'win32') {
  process.exit(0)
}

const binDir = join(process.cwd(), 'node_modules', '.bin')

try {
  for (const name of readdirSync(binDir)) {
    const file = join(binDir, name)
    try {
      const stat = statSync(file)
      if (stat.isFile() || stat.isSymbolicLink()) {
        chmodSync(file, 0o755)
      }
    } catch {
      // ignore single file failures
    }
  }
} catch {
  process.exit(0)
}
