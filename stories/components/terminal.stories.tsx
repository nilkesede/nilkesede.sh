import {storiesOf} from '@storybook/react'

import {Terminal} from '../../src/components'

storiesOf('UI|Terminal', module)
  .addDecorator(story => <div style={{padding: '25px'}}>{story()}</div>)
  .add('default', () =>
    <Terminal/>
  )
