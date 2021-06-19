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
          <SelectorIcon class="selector__button-icon" aria-hidden="true" />
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
import SelectorIcon from '../Icons/SelectorIcon.vue'

export default {
  components: {
    SelectorIcon,
  },
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
