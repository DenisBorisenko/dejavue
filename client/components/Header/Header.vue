<template>
  <header
    class="py-4 flex md:items-center md:justify-between relative"
    data-test="header-component"
  >
    <div class="flex-1 min-w-0">
      <h2
        class="
          text-2xl
          font-bold
          leading-7
          text-gray-900
          sm:text-3xl sm:truncate
        "
      >
        LOGO
      </h2>
    </div>
    <button
      class="flex md:hidden w-8 h-8 p-1"
      data-test="header-burger-button"
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
    <div
      class="
        flex flex-col
        md:flex-row md:flex
        mt-4
        md:mt-0 md:ml-4 md:visible
        absolute
        md:static
        top-10
        w-full
        box-border
        md:w-auto
      "
      :class="{ flex: mobileMenuOpen, hidden: !mobileMenuOpen }"
    >
      <button
        type="button"
        class="
          uppercase
          whitespace-nowrap
          text-base
          font-medium
          text-gray-500
          rounded-md
          hover:text-gray-900
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
          px-4
          py-2
          md:ml-3
          transition
          duration-200
        "
        data-test="header-button"
      >
        {{ content.signIn }}
      </button>
      <button
        type="button"
        class="
          uppercase
          mt-3
          md:mt-0 md:ml-3
          items-center
          px-4
          py-2
          border border-transparent
          rounded-md
          shadow-sm
          text-sm
          font-medium
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
          transition
          duration-200
          text-center
        "
        data-test="header-button"
      >
        {{ content.signUp }}
      </button>
      <Selector
        :current-value="$i18n.locale"
        :options="$i18n.locales"
        class="md:ml-3 mt-3 md:mt-0"
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
