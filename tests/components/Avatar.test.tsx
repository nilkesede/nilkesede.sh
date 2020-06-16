import {Avatar} from '../../src/components'

import {render} from '../utils'

it('renders correctly', () => {
  const {container} = render(<Avatar />)
  expect(container).toMatchSnapshot()
})
