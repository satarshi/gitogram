import Placeholder from './placeholder.vue'

export default {
  title: 'Placeholder',
  tags: ['autodocs'],
  component: { Placeholder },
  args: {
    paragraphs: 1
  }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { Placeholder },
    setup() {
      return { args };
    },
    template: `<Placeholder v-bind="args" />`
  })
}
