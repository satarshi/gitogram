import StoryUserItem from './storyUserItem.vue'

export default {
  title: 'StoryUserItem',
  tags: ['autodocs'],
  component: StoryUserItem,
  args: {
    avatar: 'https://cdn-icons-png.flaticon.com/512/146/146013.png',
    username: 'Peter'
  }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { StoryUserItem },
    setup() {
      return { args };
    },
    template: `<StoryUserItem v-bind="args" />`
  })
}
