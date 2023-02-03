import { describe, it} from '@jest/globals'
import { main } from '.'

describe('describe', () => {
  it('run main', async () => {
    await main()
  })
})
