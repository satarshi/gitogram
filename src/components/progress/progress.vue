<template>
  <div class="c-progress" :class="{ 'active': active }">
    <div class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'progress',
  data() {
    return {
      active: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      // без таймаута css transition не работает
      setTimeout(() => { this.active = true }, 0)
    })
  }
}
</script>

<style lang="scss" scoped>
.c-progress {
  background: rgba(49, 174, 84, 0.3);
  height: 2px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &.active {
    .indicator {
      width: 100%;
    }
  }
}

.indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 0;
  background: #31AE54;
  transition: 5s;
}
</style>