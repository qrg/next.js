/* eslint-env jest */
/* global jasmine */
import { join } from 'path'
import { nextBuild } from 'next-test-utils'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 2
const appDir = join(__dirname, '..')

describe('Legacy Prerender', () => {
  describe('handles old getStaticParams', () => {
    it('should fail the build', async () => {
      const out = await nextBuild(appDir, [], { stderr: true })
      expect(out.stderr).toMatch(`Build error occurred`)
      expect(out.stderr).toMatch(
        'unstable_getStaticParams was replaced with unstable_getStaticPaths. Please update your code.'
      )
    })
  })
})
