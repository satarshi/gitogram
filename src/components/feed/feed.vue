<template>
  <div class="c-feed">
    <feedUser
      :avatar="avatar"
      :username="username"
    />
    <slot></slot>
    <toggler @onToggle="toggle" />
    <div class="comments" v-if="shown">
      <ul class="comments-list">
        <li class="comments-item" v-for="issue in this.starred[this.feed].issues" :key="issue.id">
          <comment :text="issue.body_html" :username="issue.user.login" />
        </li>
      </ul>
    </div>
    <div
      v-if="date"
      class="date"
    >
      {{ date }}
    </div>
  </div>
</template>

<script>
import { comment } from '../comment'
import { toggler } from '../toggler'
import { feedUser } from '../feedUser'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'feed-item',
  components: {
    comment,
    toggler,
    feedUser
  },
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    feed: {
      type: Number,
      required: true
    },
    date: {
      type: String
    }
  },
  data() {
    return {
      shown: false
    }
  },
  computed: {
    ...mapState({
      starred: state => state.starred.data
    })
  },
  methods: {
    ...mapActions({
      fetchIssues: 'starred/fetchIssues'
    }),
    toggle(isOpened) {
      this.shown = isOpened
      this.loadIssues()
    },
    async loadIssues() {
      this.loading = true
      try {
        await this.fetchIssuesForFeed()
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    async fetchIssuesForFeed() {
      const { id, owner, name } = this.starred[this.feed]
      await this.fetchIssues({ id, owner: owner.login, repo: name })
    }
  }
}
</script>

<style src="./feed.scss" lang="scss" scoped></style>
