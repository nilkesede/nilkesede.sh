import Router from 'next/router'
import withGA from 'next-ga'
import {ThemeProvider} from 'styled-components'
import {elementType, object} from 'prop-types'

import '../styles/main.scss'

import {theme} from '../../config'

const MyApp = ({Component, pageProps}) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps}/>
  </ThemeProvider>
)

MyApp.propTypes = {
  Component: elementType,
  pageProps: object
}

export default withGA('UA-42613066-1', Router)(MyApp)
