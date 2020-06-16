import {storiesOf} from '@storybook/react'

import {Container} from '../../src/components'

storiesOf('UI|Container', module)
  .addDecorator(story =>
    <div style={{padding: '15px'}}>{story()}</div>
  )
  .add('default', () =>
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda vitae beatae dolorem eos modi temporibus, iste hic, fuga consectetur nesciunt quia eligendi quam autem totam quasi minima debitis nostrum.
    </Container>
  )
