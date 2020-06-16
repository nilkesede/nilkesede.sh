import {Subtitle} from '../../src/components'

import {render} from '../utils'

it('renders correctly', () => {
  const {container} = render(<Subtitle />)
  expect(container).toMatchSnapshot()
})
