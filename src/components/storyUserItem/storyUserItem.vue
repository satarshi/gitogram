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

<style lang="scss" scoped>
.c-story-user-item {
  &:hover {
    .avatar {
      border-color: transparent;
    }
  }

  .avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92px;
    height: 92px;
    border: 2px solid #A6328D;
    border-radius: 100%;

    .img {
      width: 80px;
      height: 80px;
      overflow: hidden;
      border-radius: 100%;
    }
  }

  .username {
    color: #000000;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 400;
    line-height: 10px;
  }
}
</style>
