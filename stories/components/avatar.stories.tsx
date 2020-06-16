import {storiesOf} from '@storybook/react'

import {Avatar} from '../../src/components'

storiesOf('UI|Avatar', module)
  .add('default', () => (
    <Avatar
      srcSet="/images/me.jpg, /images/me@2x.jpg 2x, /images/me@3x.jpg 3x"
      src="/images/me.jpg"
      alt="Nil Késede's avatar image"
    />
  )
  )
