
<template>
  <div class="topline">
    <topline>
      <template #headline>
        <div class="gitogram">
          <icon name="gitogram" />
        </div>
        <div class="icons">
          <div class="icon">
            <icon name="home" />
          </div>
          <div class="photo">
            <img :src="photo" alt="user photo" />
          </div>
          <div class="icon">
            <icon name="signOut" />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li
            class="stories-item"
            v-for="story in data.stories"
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
  <div class="x-container">
    <ul class="feeds">
      <li
        class="feed-item"
        v-for="feed in data.feeds"
        :key="feed.id"
      >
        <feed
          :avatar="feed.avatar"
          :username="feed.username"
          :comments="feed.comments"
          :date="feed.feed.date"
        >
          <div class="container">
            <div class="title">{{ feed.feed.title }}</div>
            <div class="text" v-html="feed.feed.text"></div>
            <social
              :star="feed.feed.counts.star"
              :fork="feed.feed.counts.fork"
              @onStarClick="socialClicked"
              @onForkClick="socialClicked"
            />
          </div>
        </feed>
      </li>
    </ul>
  </div>
</template>

<script>
import { topline } from '@/components/topline'
import { icon } from '@/icons'
import { storyUserItem } from '@/components/storyUserItem'
import { feed } from '@/components/feed'
import { social } from '@/components/social'
import photo from '@/assets/photo.png'
import data from './data.json'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUserItem,
    feed,
    social
  },
  data() {
    return {
      data,
      photo
    }
  },
  methods: {
    handlePress(id) {
      console.log(id)
    },
    socialClicked() {
      console.log('SocialClicked')
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
