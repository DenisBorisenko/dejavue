import { mount } from '@vue/test-utils'
import Selector from '../../../components/Selector/Selector.vue'

const testOptions = ['ua', 'ru', 'en']

describe('Selector Component', () => {
  const wrapper = mount(Selector, {
    propsData: {
      options: testOptions,
      currentValue: testOptions[0],
    },
  })

  it('component rendered', () => {
    expect(wrapper.find('[data-test="selector-component"]').exists()).toBe(true)
  })

  it('options rendered', () => {
    expect(wrapper.findAll('[data-test="selector-option"]')).toHaveLength(
      testOptions.length
    )
  })

  it('options closed', () => {
    expect(wrapper.vm.optionsIsVisible).toBe(false)
  })

  it('options opened', () => {
    wrapper.find('[data-test="selector-button"]').trigger('click')

    expect(wrapper.vm.optionsIsVisible).toBe(true)
  })

  it('options opened on second click', () => {
    wrapper.find('[data-test="selector-button"]').trigger('click')

    expect(wrapper.vm.optionsIsVisible).toBe(false)
  })

  it('closed after select', () => {
    wrapper.find('[data-test="selector-option-button"]').trigger('click')

    expect(wrapper.vm.optionsIsVisible).toBe(false)
  })
})
