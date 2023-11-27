import Topline from './topline.vue'

export default {
  title: 'Topline',
  tags: ['autodocs'],
  component: Topline
}

export const Default = {
  name: 'Стандартный вид',
  render: (args) => ({
    components: { Topline },
    template: `
    <topline>
      <template #headline>
        Headline slot
      </template>
      <template #content>
        Content slot
      </template>
    </topline>`
  })
}
