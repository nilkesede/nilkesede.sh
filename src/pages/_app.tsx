import Router from "next/router";
import withGA from "next-ga";

import '../styles/style.css'

const App = ({ Component, pageProps }) =>
  <Component {...pageProps} />

export default withGA("UA-42613066-1", Router)(App);
