import {Title} from '../../src/components'

import {render} from '../_helpers'

it('renders correctly', () => {
  const {container} = render(<Title>Hi, I&#39;m Nil Késede!</Title>)
  expect(container).toMatchSnapshot()
})
