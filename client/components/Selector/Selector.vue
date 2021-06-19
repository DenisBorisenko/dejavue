<template>
  <div>
    <div class="selector" data-test="selector-component">
      <button
        type="button"
        class="selector__button"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        :aria-label="content.languageSelector"
        data-test="selector-button"
        @click="setOptionsIsViible(!optionsIsVisible)"
      >
        <span class="selector__button-text"> {{ currentValue }} </span>
        <span class="selector__button-icon-wrapper">
          <svg
            class="selector__button-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
      <transition name="fade">
        <ul
          v-if="optionsIsVisible"
          class="selector__list"
          tabindex="-1"
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="(option, index) in options"
            id="listbox-option-0"
            :key="index"
            class="selector__list-item"
            role="option"
            data-test="selector-option"
          >
            <button
              class="selector__list-item-button"
              data-test="selector-option-button"
              @click="setValue(option)"
            >
              <span class="selector__list-item-button-text">
                {{ option }}
              </span>
            </button>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    optionsIsVisible: false,
  }),
  methods: {
    setOptionsIsViible(value) {
      this.optionsIsVisible = value
    },
    setValue(value) {
      this.$emit('set-current-value', value)
      this.setOptionsIsViible(false)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'Selector';
</style>
