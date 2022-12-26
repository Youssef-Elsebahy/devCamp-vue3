<template>
    <div class="home container">
    <NavBar></NavBar>
    <p>This is Home</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../components/shared/NavBar.vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar
  },
});
</script>
