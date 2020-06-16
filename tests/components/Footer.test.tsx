import {Footer} from '../../src/components'

import {render} from '../utils'

it('renders correctly', () => {
  const {container} = render(<Footer />)
  expect(container).toMatchSnapshot()
})
