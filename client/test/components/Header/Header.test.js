import { mount } from '@vue/test-utils'
import Header from '../../../components/Header/Header.vue'

const testContent = {
  signIn: 'test1',
  signUp: 'test2',
}

describe('Header Component', () => {
  const wrapper = mount(Header, {
    propsData: {
      content: testContent,
    },
    mocks: {
      $t: (msg) => msg,
      $i18n: {
        locale: 'en',
        locales: ['en', 'ru'],
        setLocale(language) {
          this.locale = language
        }
      },
    },
  })

  it('component rendered', () => {
    expect(wrapper.find('[data-test="header-component"]').exists()).toBe(true)
  })

  it('buttons rendered', () => {
    expect(wrapper.findAll('[data-test="header-button"]')).toHaveLength(
      Object.entries(testContent).length
    )
  })

  it('burger menu closed', () => {
    expect(wrapper.vm.mobileMenuOpen).toBe(false)
  })

  it('burger menu opened', () => {
    wrapper.find('[data-test="header-burger-button"]').trigger('click')

    expect(wrapper.vm.mobileMenuOpen).toBe(true)
  })

  it('burger menu close on second click', () => {
    wrapper.find('[data-test="header-burger-button"]').trigger('click')

    expect(wrapper.vm.mobileMenuOpen).toBe(false)
  })

  it('select language', () => {
    wrapper.vm.setLanguage('ru')

    expect(wrapper.vm.$i18n.locale).toBe('ru')
  })
})
