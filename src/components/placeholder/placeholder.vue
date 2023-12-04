<template>
  <ContentLoader viewBox="0 0 266 136" :animate="false">
    <rect x="0" y="0" rx="4" ry="4" width="266" height="136" />
    <rect x="0" y="158" rx="3" ry="3" width="177" height="14" />
    <rect x="0" y="180" rx="3" ry="3" width="218" height="14" />
    <rect x="0" y="202" rx="3" ry="3" width="139" height="14" />
  </ContentLoader>
  <template v-for="count in paragraphs" :key="count">
    <ContentLoader viewBox="0 0 266 80" :animate="false">
      <rect x="0" y="22" rx="3" ry="3" width="177" height="14" />
      <rect x="0" y="44" rx="3" ry="3" width="218" height="14" />
      <rect x="0" y="66" rx="3" ry="3" width="139" height="14" />
    </ContentLoader>
  </template>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    ContentLoader
  },
  props: {
    paragraphs: {
      type: Number,
      default: 1
    }
  }
}
</script>
