<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul ref="slider" class="stories" :style="{ transform: 'translateX(-' + sliderOffset + 'px)' }">
        <li ref="item" class="stories-item" v-for="(trending, ndx) in trendings" :key="trending.id">
          <storiesSliderItem
            :data="getStoryData(trending)"
            :active="slideNdx === ndx"
            :loading="slideNdx === ndx && loading"
            @onNextSlide="handleSlide(ndx + 1)"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onProgressFinish="handleSlide(ndx + 1)"
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
      slideNdx: 0,
      loading: false,
      btnsShown: true
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
      if (this.btnsShown === false) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme'
    }),
    async fetchreadmeForActiveSlide() {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData(obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    async loadReadme() {
      this.loading = true
      this.btnsShown = false
      try {
        await this.fetchreadmeForActiveSlide()
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async handleSlide(ndx) {
      if (ndx > this.trendings.length - 1) return
      this.slideNdx = ndx
      await this.loadReadme()
    }
  },
  async mounted() {
    console.log(this.$route.params.initialSlide)
    await this.fetchTrendings()
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex(
        (item) => item.id === this.initialSlide
      )
      await this.handleSlide(ndx)
    }
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
