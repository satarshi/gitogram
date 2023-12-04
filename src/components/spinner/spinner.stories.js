import Spinner from './spinner.vue'

export default {
  title: 'Spinner',
  tags: ['autodocs'],
  component: { Spinner }
}

export const Default = {
  name: 'Стандартный вид',
  render: () => ({
    components: { Spinner },
    template: `<Spinner />`
  })
}
