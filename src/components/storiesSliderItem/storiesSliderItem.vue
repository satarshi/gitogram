<template>
  <div class="wrapper">
    <Progress />
    <div class="avatar-container">
      <Avatar
        avatar="https://cdn-icons-png.flaticon.com/512/146/146013.png"
        username="Peter"
      />
    </div>
    <div class="content-wrapper">
      <slot />
    </div>
    <div class="button-wrapper">
      <Button title="Follow" />
    </div>
  </div>
</template>
  
<script>
import { progress } from '../progress'
import { avatar } from '../avatar'
import { button } from '../button'

export default {
  name: 'storiesSliderItem',
  components: {
    Progress: progress,
    Avatar: avatar,
    Button: button
  }
}
</script>

<styles lang="scss" scoped>
.wrapper {
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
