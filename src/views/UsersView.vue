<template>
    <div class="users container">
        <NavBar></NavBar>
        <UsersComponent v-if="showList" :usersList="users" @deleteUser="deleteUser" />
        <AddUsers v-else @userAdded="addUser($event); showList = true" />
        <button class="mt-3" v-if="showList" @click="showList = false">Add New User</button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import UsersComponent from '../components/users/UsersComponent.vue';
import NavBar from '../components/shared/NavBar.vue'
import AddUsers from '../components/users/AddUsers.vue'

export default defineComponent({
    name: 'UsersView',
    components: { UsersComponent, NavBar, AddUsers },
    data() {
        return {
            showList: true,
            users: [
                { firstName: 'awais', lastName: 'ashraf', age: 30, email: 'sh.awais@gmail.com' },
                { firstName: 'yusuf', lastName: 'yehia', age: 26, email: 'yusuf@gmail.com' },
                { firstName: 'osama', lastName: 'amer ', age: 25, email: 'osama@gmail.com' }
            ],
        }
    },
    methods: {
        addUser(user: any) {
            this.users.push(user)
            localStorage.setItem('users', JSON.stringify(this.users))
        },
        deleteUser(i: any) {
            this.users.splice(i, 1)
            localStorage.setItem('users', JSON.stringify(this.users))
        }   
    },
    mounted() {
        if (localStorage.getItem('users')) {
            this.users = JSON.parse(localStorage.getItem('users') || '{}')
        }
    }
});
</script>

<style>

</style>