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
