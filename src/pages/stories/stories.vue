<template>
  <div class="stories">
    <div class="header">
      <div class="x-container">
        <button class="logo" @click="$router.push({name: 'feeds'})">
          <icon name="gitogram" />
        </button>
        <button class="close-btn" @click="$router.push({name: 'feeds'})">
          <icon name="close" />
        </button>
      </div>
    </div>
    <div class="content">
      <storiesSlider />
    </div>
  </div>
</template>

<script>
import { icon } from '@/icons'
import { storiesSlider } from '@/components/storiesSlider'

export default {
  name: 'stories',
  components: {
    icon,
    storiesSlider
  },
  props: {
  },
  methods: {
  }
}
</script>

<styles lang="scss" scoped>
.stories {
  height: 100vh;
  background-color: #404040;
}

</styles>
