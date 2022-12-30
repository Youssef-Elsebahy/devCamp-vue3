<template>
    <div class="users container">
        <NavBar></NavBar>
        <UsersComponent v-if="showList" :usersList="users" @deleteUser="deleteUser" @editUser="editUser" />
        <AddUsers v-else @userAdded="addUpdateUser($event); showList = true" :user="userToBeEdited" />
        <button class="mt-3" v-if="showList" @click="showList = false">Add New User</button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import UsersComponent from '../components/users/UsersComponent.vue';
import NavBar from '../components/shared/NavBar.vue'
import AddUsers from '../components/users/AddUsers.vue'

interface User {
    id?: number,
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
                { firstName: 'awais', lastName: 'ashraf', age: 30, email: 'sh.awais@gmail.com', id: 1 },
                { firstName: 'yusuf', lastName: 'yehia', age: 26, email: 'yusuf@gmail.com', id: 2 },
                { firstName: 'osama', lastName: 'amer ', age: 25, email: 'osama@gmail.com', id: 3 }
            ],
            userToBeEdited: {}
        }
    },
    methods: {
        addUpdateUser(user: any) {
            if (user.id) { // update user working with v-model since we are passing the same object around
                // const editedUser = this.users.find((u: any) => u.id === user.id);
                // console.log(editedUser);
                // this.users.splice(this.userIndex, 2, user);
            } else { // add user
                user.id = new Date().getTime(); // new unique id in miliseconds
                this.users.push(user);
            }
            localStorage.setItem('users', JSON.stringify(this.users))
            this.userToBeEdited = {}
        },
        deleteUser(user: any) {
            for (let index = 0; index < this.users.length; index++) {
                if (this.users[index].id == user.id) {
                    this.users.splice(index, 1)
                    break;
                }
            }
            localStorage.setItem('users', JSON.stringify(this.users))
        },
        editUser(user: User) {
            this.userToBeEdited = user;
            this.showList = false;
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