<template>
    <div class="users container">
        <NavBar></NavBar>
        <UsersComponent v-if="showList" :usersList="users" @deleteUser="deleteUser" @editUser="editUser" />
        <AddUsers v-else @userAdded="addUser($event); showList = true" :user="userToBeEdited" />
        <button class="mt-3" v-if="showList" @click="showList = false">Add New User</button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import UsersComponent from '../components/users/UsersComponent.vue';
import NavBar from '../components/shared/NavBar.vue'
import AddUsers from '../components/users/AddUsers.vue'

interface User {
    firstName: string,
    lastName: string,
    age?: string,
    email: string
}
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
            userToBeEdited: {},
            userIndex: -1
        }
    },
    methods: {
        addUser(user: any) {
            if ( this.userIndex > -1 ) { // update user
                this.users.splice(this.userIndex, 2, user);
            } else { // add user
                this.users.push(user);
            }
            localStorage.setItem('users', JSON.stringify(this.users))
        },
        deleteUser(i: any) {
            this.users.splice(i, 1)
            localStorage.setItem('users', JSON.stringify(this.users))
        },
        editUser(index: any) {
            console.log(index)
            console.log(this.users[index]);
            this.userIndex = index;
            this.userToBeEdited = this.users[index];
            this.showList= false;
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