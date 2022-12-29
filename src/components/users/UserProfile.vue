<template lang="">
    <div class="single-user">
       {{ this.$route.params.id }}
       <div>{{ this.users}}</div>
       <router-link :to="{name: 'users'}">back to users list</router-link>
    </div>
</template>
<script>

export default {
    name: "UserProfile",
    props: { 
    usersList: Object
},
    mounted() {
        if (localStorage.getItem('users')) {
            this.users = JSON.parse(localStorage.getItem('users') || '{}')
        }
    }
}
</script>
<style lang="">
    
</style>