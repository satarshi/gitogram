import Social from './social.vue'

export default {
  title: 'Social',
  tags: ['autodocs'],
  component: Social,
  args: {
    star: '150000',
    fork: '35'
  },
  argTypes: {
    onStarClick: {
      action: "onStarClick"
    },
    onForkClick: {
      action: "onForkClick"
    }
  }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { Social },
    setup() {
      return { args };
    },
    template: `<Social @onStarClick="args.onStarClick" @onForkClick="args.onForkClick" v-bind="args" />`
  })
}
