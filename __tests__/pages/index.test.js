import {shallow} from 'enzyme'

import Index from '../../src/pages'

describe('Index', () => {
  const index = shallow(<Index/>)

  it('should show the app title', () => {
    expect(index.find('h1').text()).toEqual('nil késede')
  })

  it('should show the network links', () => {
    expect(index.find('a[title="email"]').prop('href')).toEqual('mailto:me@nilkesede.sh?subject=Hi')
    expect(index.find('a[title="github"]').prop('href')).toEqual('https://github.com/nilkesede')
    expect(index.find('a[title="twitter"]').prop('href')).toEqual('https://twitter.com/nilkesede')
    expect(index.find('a[title="instagram"]').prop('href')).toEqual('https://instagram.com/nilkesede')
    expect(index.find('a[title="strava"]').prop('href')).toEqual('https://strava.com/athletes/nilkesede')
  })
})
