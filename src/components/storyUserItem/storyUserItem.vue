<template>
  <button class="c-story-user-item" @click="$emit('onPress')">
    <div class="avatar">
      <img :src="avatar" class="img" alt="username avatar" />
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  name: 'storyUserItem',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./storyUserItem.scss" lang="scss" scoped></style>
