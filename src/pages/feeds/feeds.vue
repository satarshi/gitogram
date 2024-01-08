
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
          <div class="icon" @click="logout">
            <icon name="signOut" />
          </div>
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li
            class="stories-item"
            v-for="item in getUnstarredOnly"
            :key="item.id"
          >
            <storyUserItem
              :avatar="item.owner?.avatar_url"
              :username="item.owner?.login"
              @onPress="$router.push({ name: 'stories', params: { initialSlide: item.id }})"
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
        v-for="(feed, ndx) in starred"
        :key="feed.id"
      >
        <feed
          :avatar="feed.owner?.avatar_url"
          :username="feed.owner?.login"
          :feed="ndx"
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
import { mapState, mapActions, mapGetters } from 'vuex'

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
      photo
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data,
      starred: state => state.starred.data
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchStarred: 'starred/fetchStarred'
    }),
    handlePress(id) {
      console.log(id)
    },
    socialClicked() {
      console.log('SocialClicked')
    },
    logout() {
      localStorage.removeItem('token')
      window.location.reload()
    }
  },
  async created() {
    await this.fetchTrendings()
    await this.fetchStarred()
  }
}
</script>

<style src="./feeds.scss" lang="scss" scoped></style>
