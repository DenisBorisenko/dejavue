<template>
  <div class="container mx-auto px-4">
    <Header :content="$t('header')" />
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue'

export default {
  name: 'Index',
  components: {
    Header,
  },
}
</script>
