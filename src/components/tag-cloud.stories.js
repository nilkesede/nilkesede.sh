import React from 'react';
import {storiesOf} from '@storybook/react';

import TagCloud from './tag-cloud';
import skills from '../lib/skills';

storiesOf('UI|TagCloud', module)
  .addDecorator(story => (
    <div style={{padding: '15px'}}>{story()}</div>
  ))
  .add('default', () => (
    <TagCloud tags={skills}/>
  ));
