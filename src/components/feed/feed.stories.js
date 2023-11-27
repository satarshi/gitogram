import Feed from './feed.vue'

export default {
  title: 'Feed',
  tags: ['autodocs'],
  component: Feed,
  args: {
    avatar: 'https://cdn-icons-png.flaticon.com/512/146/146013.png',
    username: 'Peter',
    comments: [
      {
        "id": "0",
        "username": "One",
        "text": "Some text"
      },
      {
        "id": "1",
        "username": "Two",
        "text": "Some text"
      },
      {
        "id": "2",
        "username": "Three",
        "text": "Some text"
      },
      {
        "id": "3",
        "username": "Four",
        "text": "Some text"
      },
      {
        "id": "4",
        "username": "Five",
        "text": "Some text"
      }
    ],
    date: '15 may'
  }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { Feed },
    setup() {
      return { args };
    },
    template: `<Feed v-bind="args" />`
  })
}
