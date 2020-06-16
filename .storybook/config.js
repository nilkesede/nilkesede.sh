import {addDecorator} from '@storybook/react'
import {AppCreator} from '../src/pages/_app'

addDecorator(story => (
  <AppCreator>
    {story()}
  </AppCreator>
))
