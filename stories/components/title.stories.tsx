import {storiesOf} from '@storybook/react'

import {Title} from '../../src/components'

storiesOf('UI|Title', module)
  .add('default', () =>
    <Title>Title text content.</Title>
  )
