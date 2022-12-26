<template>
    <div class="home container">
      <p>404 - Page Not Found</p>
      <RouterLink :to="'/'">Back to home</RouterLink>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    components: {
    },
  })

  </script>