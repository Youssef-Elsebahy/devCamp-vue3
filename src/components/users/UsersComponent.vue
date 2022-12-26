<template>
    <div class="users-list mt-5">
        <h2>Users List</h2>
        <table v-if="usersList.length" class="w-100 table bordered">
            <thead>
                <tr>
                    <th>first name</th>
                    <th>last name</th>
                    <th>age</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="user, i in usersList" :key="i">
                    <tr>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.age }}</td>
                        <td>{{ user.email }}</td>
                        <td> <b-button @click="$emit('deleteUser', i)" variant="danger">delete</b-button></td>
                    </tr>
                </template>
            </tbody>
        </table>
        <p v-else-if="usersList.lenght === 0">no users found ...</p>
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

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>