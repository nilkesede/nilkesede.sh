import {storiesOf} from '@storybook/react'

import TagCloud from '.'
import skills from '../../lib/skills'

storiesOf('UI|TagCloud', module)
  .addDecorator(story => (
    <div style={{padding: '15px'}}>{story()}</div>
  ))
  .add('default', () => (
    <TagCloud tags={skills}/>
  ))
