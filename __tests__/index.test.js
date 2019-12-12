import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Index from '../src/pages';

Enzyme.configure({adapter: new Adapter()});

describe('on Index', () => {
  const index = shallow(<Index/>);

  it('shows the app title', () => {
    expect(index.find('h1').text()).toEqual('nil késede');
  });

  it('shows the network links', () => {
    expect(index.find('a[title="email"]').prop('href')).toEqual('mailto:nil@ksde.pw?subject=Hi');
    expect(index.find('a[title="github"]').prop('href')).toEqual('https://github.com/nilkesede');
    expect(index.find('a[title="twitter"]').prop('href')).toEqual('https://twitter.com/nilkesede');
    expect(index.find('a[title="instagram"]').prop('href')).toEqual('https://instagram.com/nilkesede');
    expect(index.find('a[title="strava"]').prop('href')).toEqual('https://strava.com/athletes/nilkesede');
  });
});
