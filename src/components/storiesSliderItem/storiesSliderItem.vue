<template>
  <div class="slider-item" :class="{ active }">
    <Progress :active="active" />
    <div class="avatar-container">
      <Avatar
        :avatar="data.userAvatar"
        :username="data.username"
      />
    </div>
    <div class="content-wrapper">
      <div v-if="loading" class="loader">
        <Spinner />
      </div>
      <div v-else class="info">
        <div
          v-if="data.content?.length"
          class="contentx-text"
          v-html="data.content"
        ></div>
        <placeholder v-else :paragraphs="2" />
      </div>
    </div>
    <div class="button-wrapper">
      <Button title="Follow" />
    </div>
    <template v-if="active">
      <button class="btn btn-next">
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
      <button class="btn btn-prev">
        <span class="icon">
          <icon name="arrow" />
        </span>
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

export default {
  name: 'storiesSliderItem',
  components: {
    Progress: progress,
    Avatar: avatar,
    Button: button,
    spinner,
    placeholder

  },
  props: {
    active: Boolean,
    loading: Boolean,
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

  &:before {
    display: block;
    content: '';
    background-color: #CACACA;
    height: 1px;
    margin: 0px -8px;
  }

  &:after {
    display: block;
    content: '';
    background-color: #CACACA;
    height: 1px;
    margin: 0px -8px;
  }
}

.button-wrapper {
  padding: 24px 0px;
  display: flex;
  justify-content: center;
}
</styles>
