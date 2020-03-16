import {shallow} from 'enzyme'

import {TagCloud} from '../../src/components'

const tags = [
  {title: 'Tag1', weight: 1},
  {title: 'Tag2', weight: 5},
  {title: 'Tag3', weight: 4},
  {title: 'Tag4', weight: 3},
  {title: 'Tag5', weight: 2}
]

describe('TagCloud component', () => {
  const tagCloud = shallow(<TagCloud tags={tags}/>)

  it('should show all tags', () => {
    expect(tagCloud.find('span')).toHaveLength(tags.length)
  })

  it('should define the right tag weight', () => {
    expect(tagCloud.find('span').at(0).hasClass('weight-1')).toBeTruthy()
    expect(tagCloud.find('span').at(1).hasClass('weight-5')).toBeTruthy()
    expect(tagCloud.find('span').at(2).hasClass('weight-4')).toBeTruthy()
    expect(tagCloud.find('span').at(3).hasClass('weight-3')).toBeTruthy()
    expect(tagCloud.find('span').at(4).hasClass('weight-2')).toBeTruthy()
  })
})
