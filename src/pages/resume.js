import React, {Component} from 'react';
import Head from '../components/head';

export default class Index extends Component {
  render() {
    const title = 'Nil Késede';
    const description = 'The Nil Késede\'s website!';

    return (
      <div>
        <Head title={title} description={description}/>

        <h1>resume</h1>
      </div>
    );
  }
}
