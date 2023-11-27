import Toggler from './toggler.vue'

export default {
  title: 'Toggler',
  tags: ['autodocs'],
  component: Toggler,
  argTypes: {
    onToggle: {
      action: "onToggle"
    }
  }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { Toggler },
    setup() {
      return { args };
    },
    template: `<Toggler @onToggle="args.onToggle" />`
  })
}
