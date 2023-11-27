import FeedUser from './feedUser.vue'

export default {
  title: 'FeedUser',
  tags: ['autodocs'],
  component: FeedUser,
  args: {
    avatar: 'https://cdn-icons-png.flaticon.com/512/146/146013.png',
    username: 'Peter'
  }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { FeedUser },
    setup() {
      return { args };
    },
    template: `<FeedUser v-bind="args" />`
  })
}
