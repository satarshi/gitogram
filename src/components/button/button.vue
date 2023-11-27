<template>
  <button class="button">{{ title }}</button>
</template>

<script>
export default {
  name: 'button',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 11px 109px;
  background: #31AE54;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 700;

  &:hover {
    background: #9E9E9E;
  }
}
</style>
