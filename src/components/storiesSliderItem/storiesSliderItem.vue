<template>
  <div class="slider-item" :class="{ active }">
    <Progress :active="active" @onFinish="$emit('onProgressFinish')" />
    <div class="avatar-container">
      <Avatar
        :avatar="data.userAvatar"
        :username="data.username"
      />
    </div>
    <div class="content-wrapper">
      <div v-if="loading" class="loader">
        <spinner />
      </div>
      <div v-else class="info">
        <div
          v-if="data.content?.length"
          class="content-text"
          v-html="data.content"
        ></div>
        <placeholder v-else :paragraphs="2" />
      </div>
    </div>
    <div class="button-wrapper">
      <Button
        :theme="data.following.status ? 'grey' : 'green'"
        :loading="data.following.loading"
        :title="data.following.status ? 'Unfollow' : 'Follow'"
        @click="$emit(data.following.status ? 'onUnFollow' : 'onFollow', data.id)"
      />
    </div>
    <template v-if="active">
      <button
        v-if="btnsShown.includes('next')"
        class="btn btn-next"
        @click="$emit('onNextSlide')"
      >
        <icon name="arrow" />
      </button>
      <button
        v-if="btnsShown.includes('prev')"
        class="btn btn-prev"
        @click="$emit('onPrevSlide')"
      >
        <icon name="arrow" />
      </button>
    </template>
  </div>
</template>

<script>
import { progress } from '../progress'
import { avatar } from '../avatar'
import { button } from '../button'
import { spinner } from '../spinner'
import { placeholder } from '../placeholder'
import { icon } from '../../icons'

export default {
  name: 'storiesSliderItem',
  components: {
    Progress: progress,
    Avatar: avatar,
    Button: button,
    spinner,
    placeholder,
    icon

  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish', 'onFollow'],
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev']
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<styles lang="scss" scoped>
.slider-item {
  padding: 8px;
  width: 375px;
  border-radius: 8px;
  background: #FFFFFF;
  position: relative;
}

.avatar-container {
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 4px;
}

.content-wrapper {
  padding: 0px 10px;
  color: #404040;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.40px;
  height: 500px;
  overflow: hidden;

  &:before {
    display: block;
    content: '';
    background-color: #CACACA;
    height: 1px;
    margin: 0px -8px;
    margin-bottom: 10px;
  }

  &:after {
    display: block;
    content: '';
    background-color: #CACACA;
    height: 1px;
    margin: 0px -8px;
    margin-top: 10px;
  }
}

.button-wrapper {
  padding: 24px 0px;
  display: flex;
  justify-content: center;
}

.btn {
  width: 44px;
  height: 44px;
  color: black;
  position: absolute;
  z-index: 10;
  top: calc(50% - 22px);

  &:hover {
    color: #31AE54;
  }

  &.btn-prev {
    transform: rotate(180deg);
    left: -60px;
  }

  &.btn-next{
    right: -60px;
  }
}
</styles>
