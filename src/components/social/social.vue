<template>
  <div class="c-social">
    <button class="btnWithCount" @click="$emit('onStarClick')">
      <div class="left">
        <div class="icon">
          <icon name="star" />
        </div>
        <span class="text">Star</span>
      </div>
      <div class="right">{{ kFormatter(star) }}</div>
    </button>
    <button class="btnWithCount" @click="$emit('onForkClick')">
      <div class="left">
        <div class="icon">
          <icon name="fork" />
        </div>
        <span class="text">Fork</span>
      </div>
      <div class="right">{{ kFormatter(fork) }}</div>
    </button>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'social',
  components: {
    icon
  },
  props: {
    star: {
      type: String,
      default: '0'
    },
    fork: {
      type: String,
      default: '0'
    }
  },
  methods: {
    // TODO: заменить на какую-нибудь либу
    // взято отсюда https://stackoverflow.com/a/9461657
    kFormatter(num) {
      return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }
  }
}
</script>

<styles src="./social.scss" lang="scss" scoped></styles>
