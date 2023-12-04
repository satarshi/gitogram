<template>
  <div class="wrapper">
    <div class="header">
      <div class="x-container">
        <button class="logo">
          <icon name="gitogram" />
        </button>
        <button class="close-btn">
          <icon name="close" />
        </button>
      </div>
    </div>
    <div class="content">
      <stories-slider />
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'stories',
  components: {
    icon
  },
  props: {
  },
  methods: {
  }
}
</script>

<styles lang="scss" scoped></styles>
