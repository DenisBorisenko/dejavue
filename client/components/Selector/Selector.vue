<template>
  <div>
    <div class="h-full relative" data-test="selector-component">
      <button
        type="button"
        class="
          bg-white
          relative
          w-full
          h-full
          border border-gray-300
          rounded-md
          shadow-sm
          pl-3
          pr-10
          py-2
          text-left
          cursor-pointer
          focus:outline-none
          focus:ring-1
          focus:ring-indigo-500
          focus:border-indigo-500
          sm:text-sm
        "
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        data-test="selector-button"
        @click="setOptionsIsViible(true)"
      >
        <span class="block truncate"> {{ currentValue }} </span>
        <span
          class="
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            pointer-events-none
          "
        >
          <!-- Heroicon name: solid/selector -->
          <svg
            class="h-5 w-5 text-gray-400"
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
      <ul
        v-show="optionsIsVisible"
        class="
          absolute
          z-10
          mt-1
          w-full
          bg-white
          shadow-lg
          max-h-60
          rounded-md
          py-1
          text-base
          ring-1 ring-black ring-opacity-5
          overflow-auto
          focus:outline-none
          sm:text-sm
        "
        tabindex="-1"
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        <li
          v-for="(option, index) in options"
          id="listbox-option-0"
          :key="index"
          class="text-gray-900 cursor-default select-none relative"
          role="option"
          data-test="selector-option"
        >
          <button
            class="
              text-gray-900
              cursor-default
              select-none
              relative
              py-2
              px-2
              w-full
              cursor-pointer
            "
            data-test="selector-option-button"
            @click="setValue(option)"
          >
            <span class="font-normal block truncate ali text-center">
              {{ option }}
            </span>
          </button>
        </li>
      </ul>
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
