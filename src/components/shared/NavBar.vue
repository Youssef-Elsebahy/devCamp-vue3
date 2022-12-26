<template>
   <div class="buggy-navbar">
    <!-- info warning danger success -->
    <b-navbar toggleable="lg" class="d-flex justify-content-between">
      <b-navbar-brand href="#">Buggy</b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <RouterLink class="navbar-collapse-item" to="/">Home</RouterLink>
          <RouterLink class="navbar-collapse-item" to="/users">Users</RouterLink>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'NavBar',
    props: {
  },  
})
</script>

<style scoped lang="scss">
$navbarColor: #eeeeee;
$fontSize: 14px;
.buggy-navbar {
  background-color: $navbarColor;
  .navbar-collapse {
    flex-grow: unset;
    &-item {
      margin-left: 15px;
      &:hover {
        color: #1abc9c;
      }
    }
  }
}
</style>