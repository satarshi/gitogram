import Progress from './progress.vue'

export default {
  title: 'Progress',
  tags: ['autodocs'],
  component: { Progress },
  argTypes: {
    onFinish: {
      action: "onFinish",
      description: "fires when progress reaches the end"
    }
  }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: `<Progress @onFinish="args.onFinish" />`
  })
}
