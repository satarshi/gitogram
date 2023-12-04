<template>
  <div class="spinner">
    <icon name="spinner" />
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'spinner',
  components: {
    icon
  }
}
</script>

<styles lang="scss" scoped>
  .spinner {
    width: 62px;
    height: 62px;
    color: #31AE54;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin { 
    100% { 
      -webkit-transform: rotate(360deg); 
      transform:rotate(360deg); 
    } 
  }
</styles>
