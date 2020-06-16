import {storiesOf} from '@storybook/react'

import {Title} from '../../src/components'

storiesOf('UI|Title', module)
  .addDecorator(story =>
    <div style={{padding: '15px'}}>{story()}</div>
  )
  .add('default', () =>
    <Title>Title text content.</Title>
  )
