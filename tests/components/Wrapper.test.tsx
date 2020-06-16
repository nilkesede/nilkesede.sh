import {Wrapper} from '../../src/components'

import {render} from '../utils'

it('renders correctly', () => {
  const {container} = render(<Wrapper />)
  expect(container).toMatchSnapshot()
})
