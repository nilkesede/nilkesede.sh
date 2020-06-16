import {storiesOf} from '@storybook/react'

import {Wrapper} from '../../src/components'

storiesOf('UI|Wrapper', module)
  .addDecorator(story =>
    <div style={{padding: '15px'}}>{story()}</div>
  )
  .add('default', () => (
    <Wrapper>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda vitae beatae dolorem eos modi temporibus, iste hic, fuga consectetur nesciunt quia eligendi quam autem totam quasi minima debitis nostrum.
    </Wrapper>
  )
  )
