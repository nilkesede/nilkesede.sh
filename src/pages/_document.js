import BaseDocument from 'next/document'
import {ServerStyleSheet} from 'styled-components'

class Document extends BaseDocument {
  static async getInitialProps(context) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = context.renderPage

    try {
      context.renderPage = () => originalRenderPage({
        enhanceApp: App => properties => sheet.collectStyles(<App {...properties}/>)
      })

      const initialProperties = await BaseDocument.getInitialProps(context)

      return {
        ...initialProperties,
        styles: (
          <>
            {initialProperties.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}

export default Document
