import {configure, addDecorator} from '@storybook/react'
import Router from 'next/router'
import {ThemeProvider} from 'styled-components'

import {theme} from '../config'

import '../src/styles/main.scss'

const mockedRouter = {
  push: () => Promise.resolve(),
  replace: () => Promise.resolve(),
  prefetch: () => {}
}

Router.router = mockedRouter

addDecorator(story => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))
