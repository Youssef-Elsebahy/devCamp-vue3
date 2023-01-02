<template>
    <div class="users-list mt-5">
        <h2>Users List</h2>
        <table v-if="usersList?.length" class="w-100 table bordered">
            <thead>
                <tr>
                    <th></th>
                    <th>first name</th>
                    <th>last name</th>
                    <th>age</th>
                    <th>email</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <template v-for="user, i in usersList" :key="i">
                    <tr>
                        <td v-if="user.image"><b-avatar :src="user.image" size="6rem"></b-avatar></td>
                        <td v-else></td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.age }}</td>
                        <td>{{ user.email }}</td>
                        <td><router-link :to="{name:'UserProfile', params:{id:user.id}}"><b-button variant="info">Profile</b-button></router-link> </td>
                        <td> <b-button @click="$emit('editUser', user)" variant="warning">Edit</b-button></td>
                        <td> <b-button @click="$emit('deleteUser', user)" variant="danger">Delete</b-button></td>
                    </tr>
                </template>
            </tbody>
        </table>
        <p v-else-if="usersList?.length === 0">no users found ...</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'UsersComponent',
    props: {
        usersList: Object
    },
})

</script>

<style scoped lang="css">


</style>