import React from 'react';
import Router from 'next/router';
import withGA from 'next-ga';
import {elementType, object} from 'prop-types';

import '../styles/main.scss';

const MyApp = ({Component, pageProps}) => {
  return <Component {...pageProps}/>;
};

MyApp.propTypes = {
  Component: elementType,
  pageProps: object
};

export default withGA('UA-42613066-1', Router)(MyApp);
