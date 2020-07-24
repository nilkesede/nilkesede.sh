import {Terminal} from '../../src/components'

import {render} from '../_helpers'

it('renders correctly', () => {
  const {container} = render(<Terminal/>)
  expect(container).toMatchSnapshot()
})
