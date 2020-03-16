import {shallow} from 'enzyme'

import {Head} from '../../src/components'

const title = 'Nil Késede'
const description = 'The Nil Késede\'s website!'

describe('Head component', () => {
  const head = shallow(<Head title={title} description={description}/>)

  it('should show the app title', () => {
    expect(head.find('title').text()).toEqual(title)
  })

  it('should show the app meta tag description', () => {
    expect(head.find('meta[name="description"]').prop('content')).toEqual(description)
  })
})
