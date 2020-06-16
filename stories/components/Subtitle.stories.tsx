import {storiesOf} from '@storybook/react'

import {Subtitle} from '../../src/components'

storiesOf('UI|Subtitle', module)
  .addDecorator(story =>
    <div style={{padding: '15px'}}>{story()}</div>
  )
  .add('default', () =>
    <Subtitle>Subtitle text content.</Subtitle>
  )
