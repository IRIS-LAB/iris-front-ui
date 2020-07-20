import { mount } from '@vue/test-utils'
import IrisAbout from '@/components/about/IrisAbout'

describe('IrisAbout.vue', () => {
  const APPLICATION_JSON = {
    name: 'my name',
    description: 'my description',
    copyrightYear: '2018',
    engines: {
      node: '1.0',
      npm: '2.0'
    },
    company: 'my company',
    team: 'my team'
  }
  const PACKAGE_JSON = {
    name: 'package name',
    version: '0.0.1',
    dependencies: {
      vue: '2.0',
      vuex: '1.0'
    }
  }

  test('is a Vue instance', () => {
    const wrapper = mount(IrisAbout)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('render application node without package node', () => {
    // when
    const wrapper = mount(IrisAbout, { propsData: { applicationJson: APPLICATION_JSON } })

    // then
    const globalDiv = wrapper.find('div')
    expect(globalDiv.text()).toContain('my name')
    expect(globalDiv.text()).toContain('my description')
    expect(globalDiv.text()).toContain('my team')
    expect(globalDiv.text()).toContain('my company')
    expect(globalDiv.text()).toContain('2018')
    expect(globalDiv.text()).toContain('node 1.0')
    expect(globalDiv.text()).toContain('npm 2.0')
  })
  it('render application node with override', () => {
    // when
    const wrapper = mount(IrisAbout, {
      propsData: {
        applicationName: 'an application name',
        applicationDescription: 'a new description',
        applicationTeam: 'another team',
        applicationCopyrightYear: '2019',
        applicationEnginesNode: '2.0',
        applicationEnginesNpm: '3.0',
        applicationCompany: 'another company',
        applicationJson: APPLICATION_JSON
      }
    })

    // then
    const globalDiv = wrapper.find('div')
    expect(globalDiv.text()).toContain('an application name')
    expect(globalDiv.text()).not.toContain('my name')
    expect(globalDiv.text()).toContain('a new description')
    expect(globalDiv.text()).not.toContain('my description')
    expect(globalDiv.text()).toContain('another team')
    expect(globalDiv.text()).not.toContain('my team')
    expect(globalDiv.text()).toContain('another company')
    expect(globalDiv.text()).not.toContain('my company')
    expect(globalDiv.text()).toContain('2019')
    expect(globalDiv.text()).not.toContain('2018')
    expect(globalDiv.text()).toContain('node 2.0')
    expect(globalDiv.text()).not.toContain('node 1.0')
    expect(globalDiv.text()).toContain('npm 3.0')
    expect(globalDiv.text()).not.toContain('npm 2.0')
  })
  it('render package node', () => {
    // when
    const wrapper = mount(IrisAbout, {
      propsData: { packageJson: PACKAGE_JSON }
    })

    // then
    const globalDiv = wrapper.find('div')
    expect(globalDiv.text()).toContain('package name')
    expect(globalDiv.text()).toContain('0.0.1')
    expect(globalDiv.text()).toContain('vue 2.0')
    expect(globalDiv.text()).toContain('vuex 1.0')
  })
})
