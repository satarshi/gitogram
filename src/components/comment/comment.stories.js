import Comment from './comment.vue'

export default {
  title: 'Comment',
  tags: ['autodocs'],
  component: Comment,
  args: {
    username: 'Peter',
    text: 'Some text'
  }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { Comment },
    setup() {
      return { args };
    },
    template: `<Comment v-bind="args" />`
  })
}
