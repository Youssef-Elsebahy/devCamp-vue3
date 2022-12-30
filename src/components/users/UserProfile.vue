<template lang="">
    <div class="single-user">
       <div>{{ user.firstName }}</div>
       <router-link :to="{name: 'users'}">back to users list</router-link>
    </div>
</template>
<script>

export default {
    name: "UserProfile",
    data() {
        return {
            user: {},
        }
    },
    mounted() {
        if (localStorage.getItem('users')) {
             const users= JSON.parse(localStorage.getItem('users') || '{}')
              this.user = users.filter((u) => u.id === this.$route.params.id)
              console.log(this.user)
        }
    }
}
</script>
<style lang="">
    
</style>

<!-- still working on this component -->