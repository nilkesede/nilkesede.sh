import Index from '../../src/pages'

import {render} from '../_helpers'

it('renders correctly', () => {
  const {container} = render(<Index/>)
  expect(container).toMatchSnapshot()
})
