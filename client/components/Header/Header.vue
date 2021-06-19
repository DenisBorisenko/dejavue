<template>
  <header class="header" data-test="header-component">
    <div class="header__logo-wrapper">
      <h2 class="header__logo">LOGO</h2>
    </div>
    <button
      class="header__burger-button"
      data-test="header-burger-button"
      :aria-label="burgerButtonAriaLabel"
      @click="handleBurgerButton"
    >
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div class="header__menu-container" :class="menuContainerClassName">
      <button
        type="button"
        class="header__sign-in-button"
        data-test="header-button"
      >
        {{ content.signIn }}
      </button>
      <button
        type="button"
        class="header__sign-up-button"
        data-test="header-button"
      >
        {{ content.signUp }}
      </button>
      <Selector
        :current-value="$i18n.locale"
        :options="$i18n.locales"
        class="header__selector"
        :content="content"
        @set-current-value="setLanguage"
      />
    </div>
  </header>
</template>

<script>
import Selector from '../Selector/Selector.vue'

export default {
  components: {
    Selector,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    mobileMenuOpen: false,
  }),
  computed: {
    menuContainerClassName() {
      return { 'header__menu-container--hidden': !this.mobileMenuOpen }
    },
    burgerButtonAriaLabel() {
      if (!this.mobileMenuOpen) {
        return this.content.openMenu
      } else {
        return this.content.closeMenu
      }
    },
  },
  methods: {
    handleBurgerButton() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    setLanguage(value) {
      this.$i18n.setLocale(value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'Header';
</style>
