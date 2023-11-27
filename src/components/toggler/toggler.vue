<template>
  <button
    :class="['button', { 'active': isActive }]"
    @click="toggle"
  >
    <span class="text">{{ isActive ? 'Hide' : 'Show' }} issues</span>
    <span class="icon">
      <icon name="triangle" />
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'toggler',
  components: {
    icon
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
      this.$emit('onToggle', this.isActive)
    }
  }
}
</script>

<styles src="./toggler.scss" lang="scss" scoped></styles>
