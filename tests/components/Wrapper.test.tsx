import {Wrapper} from '../../src/components'

import {render} from '../_helpers'

it('renders correctly', () => {
  const {container} = render(<Wrapper />)
  expect(container).toMatchSnapshot()
})
