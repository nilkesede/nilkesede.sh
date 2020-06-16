import 'jest-styled-components'
import {render} from '@testing-library/react'

import {AppCreator} from '../../src/pages/_app'

const AllTheProviders = ({children}) => (
  <AppCreator>
    {children}
  </AppCreator>
)

const customRender = ui =>
  render(ui, {wrapper: AllTheProviders})

export {customRender as render}
