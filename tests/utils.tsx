import 'jest-styled-components'

import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import {theme} from '../src/config'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}

const customRender = ui =>
  render(ui, {wrapper: AllTheProviders})

export { customRender as render }
