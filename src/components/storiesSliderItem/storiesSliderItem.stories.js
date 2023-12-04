import StoriesSliderItem from './storiesSliderItem.vue'

export default {
  title: 'StoriesSliderItem',
  tags: ['autodocs'],
  component: { StoriesSliderItem }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { StoriesSliderItem },
    template: `<StoriesSliderItem>Some Text</StoriesSliderItem>`
  })
}
