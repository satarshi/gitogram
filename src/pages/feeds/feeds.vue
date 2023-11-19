
<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="icon">
          <icon name="home" />
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li
            class="stories-item"
            v-for="story in stories"
            :key="story.id"
          >
            <storyUserItem
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
  </div>
</template>

<script>
import { topline } from '@/components/topline'
import { icon } from '@/icons'
import { storyUserItem } from '@/components/storyUserItem'
import stories from './data.json'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUserItem
  },
  data() {
    return {
      stories
    }
  },
  methods: {
    handlePress(id) {
      console.log(id)
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
