import {Head} from '../../src/components'

import {render} from '../utils'

it('renders correctly', () => {
  const {container} = render(
    <Head
      title="Nil Késede | Software Developer"
      description={`A Software Developer focused on creating and contribute to high availability apps and improve the user experience with modern tech stacks.`}
      keywords="javascript, developer, development, web, mobile, full stack, nil, késede, kesede"
    />
  )
  expect(container).toMatchSnapshot()
})
