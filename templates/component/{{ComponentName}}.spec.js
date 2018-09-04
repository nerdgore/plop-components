/* globals describe: false, it: false, expect: false */
import {{ ComponentName }} from './{{ ComponentName }}'
import { shallow } from 'enzyme'
import jest from 'jest'

describe('{{properCase name}}', () => {
  it('renders correctly', () => {
    const result = shallow(< {{ ComponentName }}/>)
    expect(result).toMatchSnapshot()
  })
})
