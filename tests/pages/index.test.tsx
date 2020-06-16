import Index from '../../src/pages'

import {render} from '../utils'

it('renders correctly', () => {
  const {container} = render(<Index />)
  expect(container).toMatchSnapshot()
})
