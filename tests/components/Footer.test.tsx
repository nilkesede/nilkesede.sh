import {Footer} from '../../src/components'

import {render} from '../_helpers'

it('renders correctly', () => {
  const {container} = render(<Footer />)
  expect(container).toMatchSnapshot()
})
