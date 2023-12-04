import Stories from './stories.vue'

export default {
  title: 'Stories',
  tags: ['autodocs'],
  component: { Stories }
}

export const Default = {
  name: 'Стандартный вид',
  render: () => ({
    components: { Stories },
    template: `<Stories />`
  })
}
