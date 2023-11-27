import Progress from './progress.vue'

export default {
  title: 'Progress',
  tags: ['autodocs'],
  component: { Progress },
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { Progress },
    template: `<Progress />`
  })
}
