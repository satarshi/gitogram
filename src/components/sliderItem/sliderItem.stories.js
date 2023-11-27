import SliderItem from './sliderItem.vue'

export default {
  title: 'SliderItem',
  tags: ['autodocs'],
  component: { SliderItem }
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { SliderItem },
    template: `<SliderItem>Some Text</SliderItem>`
  })
}
