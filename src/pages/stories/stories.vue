<template>
  <div class="stories-wrapper">
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
      <storiesSlider :initialSlide="Number($route.params.initialSlide)" />
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
.stories-wrapper {
  height: 100vh;
  background-color: #404040;

  .logo {
    width: 174px;
    height: 40px;
    color: white;
  }

  .close-btn {
    width: 23px;
    height: 23px;
    color: white;
  }

  .x-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 44px 0px;
  }
}
</styles>
