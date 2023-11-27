
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
            v-for="story in mock.stories"
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
        v-for="feed in items"
        :key="feed.id"
      >
        <feed
          :avatar="feed.owner?.avatar_url"
          :username="feed.owner?.login"
          :comments="mock.feeds[0]?.comments"
          :date="feed.created_at"
        >
          <div class="container">
            <div class="title">{{ feed.name }}</div>
            <div class="text" v-html="feed.description"></div>
            <social
              class="social"
              :star="feed.stargazers_count"
              :fork="feed.forks_count"
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
import mock from './mock.json'

import { getPopular } from '@/api/rest/popular'

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
      mock,
      photo,
      items: []
    }
  },
  methods: {
    handlePress(id) {
      console.log(id)
    },
    socialClicked() {
      console.log('SocialClicked')
    }
  },
  async created() {
    // this.mock = mock
    try {
      const { data } = await getPopular()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
