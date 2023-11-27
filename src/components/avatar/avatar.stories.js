import Avatar from './avatar.vue'

export default {
  title: 'Avatar',
  tags: ['autodocs'],
  component: Avatar,
  args: {
    avatar: 'https://cdn-icons-png.flaticon.com/512/146/146013.png',
    username: 'Peter'
  }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: `<Avatar v-bind="args" />`
  })
}
