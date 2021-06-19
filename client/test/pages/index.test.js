import { mount } from '@vue/test-utils'
import IndexPage from '../../pages/index.vue'

describe('index page', () => {
  const wrapper = mount(IndexPage, {
    mocks: {
      $t: () => ({
        signIn: 'test1',
        signUp: 'test2',
      }),
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
    expect(wrapper.find('[data-test="index-page"]').exists()).toBe(true)
  })
})
