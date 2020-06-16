import {Subtitle} from '../../src/components'

import {render} from '../_helpers'

it('renders correctly', () => {
  const {container} = render(
    <Subtitle>Subtitle text content.</Subtitle>
  )
  expect(container).toMatchSnapshot()
})
