import StoriesSlider from './storiesSlider.vue'

export default {
  title: 'StoriesSlider',
  tags: ['autodocs'],
  component: { StoriesSlider }
}

export const Default = {
  name: 'Стандартный вид',
  render: () => ({
    components: { StoriesSlider },
    template: `<StoriesSlider />`
  })
}