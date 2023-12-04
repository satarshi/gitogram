<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul ref="slider" class="stories" :style="{ transform: 'translateX(-' + sliderOffset + 'px)' }">
        <li ref="item" class="stories-item" v-for="(trending, ndx) in trendings" :key="trending.id">
          <storiesSliderItem
            :data="getStoryData(trending)"
            :active="slideNdx === ndx"
            @onNextSlide="handleSlide(ndx + 1)"
            @onPrevSlide="handleSlide(ndx - 1)"
            :btnsShown="activeBtns"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { storiesSliderItem } from '../storiesSliderItem'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'storiesSlider',
  components: {
    storiesSliderItem
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data() {
    return {
      slideNdx: 0
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    }),
    sliderOffset() {
      return this.slideNdx * (376 + 38)
    },
    activeBtns() {
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.lenght - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    }),
    getStoryData(obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    handleSlide(ndx) {
      this.slideNdx = ndx
    }
  },
  async mounted() {
    console.log(this.$route.params.initialSlide)
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(
        (item) => item.id === this.initialSlide
      )
      await this.handleSlide(ndx)
    }
    await this.fetchTrendings()
  }
}
</script>

<styles lang="scss" scoped>
.c-stories-slider {
  display: flex;
  align-items: center;
  overflow: hidden;
  height: calc(100vh - 128px);

  .stories-container {
    height: 660px;
    position: relative;
    width: 100%;
  }

  .stories {
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    gap: 38px;
    margin-left: -188px;
    transition: .4s;
  }
}
</styles>
