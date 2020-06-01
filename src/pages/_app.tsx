import Router from "next/router"
import withGA from "next-ga"
import {ThemeProvider} from 'styled-components'

import {theme} from '../config'

import '../styles/style.css'

const App = ({Component, pageProps}) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps}/>
  </ThemeProvider>
)

export default withGA("UA-42613066-1", Router)(App)
