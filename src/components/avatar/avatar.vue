<template>
  <div class="avatar">
    <img :src="avatar" class="img" alt="username avatar" />
    <div class="username">{{ username }}</div>
  </div>
</template>

<script>
export default {
  name: 'avatar',
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
.avatar {
  display: flex;
  align-items: center;

  .img {
    width: 32px;
    height: 32px;
  }

  .username {
    color: #292929;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    margin-left: 12px;
  }
}
</style>
