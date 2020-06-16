import Page404 from '../../src/pages'

import {render} from '../_helpers'

it('renders correctly', () => {
  const {container} = render(<Page404/>)
  expect(container).toMatchSnapshot()
})
