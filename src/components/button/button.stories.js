import Button from './button.vue'

export default {
  title: 'Button',
  tags: ['autodocs'],
  component: { Button },
  args: {
    title: 'Follow'
  }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args" />`
  })
}
