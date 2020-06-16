import {storiesOf} from '@storybook/react'

import {Footer} from '../../src/components'

storiesOf('UI|Footer', module)
  .addDecorator(story =>
    <div style={{padding: '15px'}}>{story()}</div>
  )
  .add('default', () =>
    <Footer/>
  )
