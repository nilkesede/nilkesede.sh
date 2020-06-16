import {Title} from '../../src/components'

import {render} from '../utils'

it('renders correctly', () => {
  const {container} = render(<Title />)
  expect(container).toMatchSnapshot()
})
