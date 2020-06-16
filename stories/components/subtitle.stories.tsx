import {storiesOf} from '@storybook/react'

import {Subtitle} from '../../src/components'

storiesOf('UI|Subtitle', module)
  .add('default', () =>
    <Subtitle>Subtitle text content.</Subtitle>
  )
