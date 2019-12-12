import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Head from '../src/components/head';

Enzyme.configure({adapter: new Adapter()});

const title = 'Nil Késede';
const description = 'The Nil Késede\'s website!';

describe('on Head component', () => {
  const head = shallow(<Head title={title} description={description}/>);

  it('shows the app title', () => {
    expect(head.find('title').text()).toEqual(title);
  });

  it('shows the app meta tag description', () => {
    expect(head.find('meta[name="description"]').prop('content')).toEqual(description);
  });
});
