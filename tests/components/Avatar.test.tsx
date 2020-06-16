import {Avatar} from '../../src/components'

import {render} from '../_helpers'

it('renders correctly', () => {
  const {container} = render(
    <Avatar
      srcSet="/images/me.jpg, /images/me@2x.jpg 2x, /images/me@3x.jpg 3x"
      src="/images/me.jpg"
      alt="Nil Késede's avatar image"
    />
  )
  expect(container).toMatchSnapshot()
})
