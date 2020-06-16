import {Container} from '../../src/components'

import {render} from '../_helpers'

it('renders correctly', () => {
  const {container} = render(<Container />)
  expect(container).toMatchSnapshot()
})
