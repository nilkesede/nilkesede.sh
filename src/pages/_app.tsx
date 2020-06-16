/* istanbul ignore file */
import Router from 'next/router'
import withGA from 'next-ga'
import {ThemeProvider} from 'styled-components'

import {theme} from '../config'

import '../styles/style.css'

const AppCreator = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

const App = ({Component, pageProps}) => (
  <AppCreator>
    <Component {...pageProps}/>
  </AppCreator>
)

export {
  AppCreator
}

export default withGA('UA-42613066-1', Router)(App)
