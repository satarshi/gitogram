<template>
  <div class="c-comment">
    <p>
      <span class="username">{{ username }}</span>
      <span v-html="text"></span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./comment.scss" lang="scss" scoped></style>
