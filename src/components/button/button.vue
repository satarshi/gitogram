<template>
  <button class="button" :class="[ theme, { loading: loading }, { disabled: disabled } ]">
    <template  v-if="loading">
      <div class="spinner">
        <icon name="spinner" />
      </div>
    </template>
    <template v-else>
      {{ title }}
    </template>
  </button>
</template>

<script>
import { icon } from '@/icons'

export default {
  name: 'button',
  components: {
    icon
  },
  props: {
    title: {
      type: String
    },
    theme: {
      type: String,
      default: 'green'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  padding: 11px 109px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 700;

  &.green {
    background: #31AE54;

    &:hover {
      background: #9E9E9E;
    }
  }

  &.gray {
    background: #9E9E9E;

    &:hover {
      background: #31AE54;
    }
  }

  .spinner {
    height: 16px;
    width: 16px;
    color: white;
  }

  &.loading {
    pointer-events: none;
  }

  &.disabled {
    pointer-events: none;
  }
}
</style>
