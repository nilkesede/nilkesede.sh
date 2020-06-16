import {Container} from '../../src/components'

import {render} from '../utils'

it('renders correctly', () => {
  const {container} = render(<Container />)
  expect(container).toMatchSnapshot()
})
