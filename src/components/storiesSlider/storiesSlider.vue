<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <storiesSliderItem />
    </div>
  </div>
</template>

<script>
import { storiesSliderItem } from '../storiesSliderItem'

export default {
  name: 'storiesSlider',
  components: {
    storiesSliderItem
  },
  props: {
  },
  methods: {
  }
}
</script>

<styles lang="scss" scoped></styles>