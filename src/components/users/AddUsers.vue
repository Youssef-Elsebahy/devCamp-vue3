<!-- 
<script lang="ts">
import { defineComponent } from 'vue';
import { reactive } from 'vue';
let form = {}
export default defineComponent({
    name: "AddUsers",
    methods: {
        onAddUser() {
            this.$emit('userAdded', this.form)
            alert("form submitted")
        }
    },
    setup() {
         form = reactive({
            firstName: "",
            lastName: "",
            age: "",
            email: ""
        })
        return {
            form 
        }
    },
    mounted() {
        console.log(this.form)
    }

})
</script> -->

<template>
    <div class="add-users my-5">
        <form @submit.prevent="onAddUser" class="newUser-form p-2 m-2">
            <h1>New user Form</h1>
            <div class="input__field">
                <label for="firstName">First name</label>
                <input type="text" id="firstName" v-model="form.firstName" minlength="3" required />
            </div>
            <div class="input__field">
                <label for="lastName">Last name</label>
                <input type="text" id="lastName" v-model="form.lastName" required />
            </div>
            <div class="input__field">
                <label for="age">Age</label>
                <input type="number" id="age" v-model="form.age" min="1" required />
            </div>
            <div class="input__field">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="form.email" required />
            </div>
            <button type="submit">{{ user ? 'Update User' : 'Add User' }}</button>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "AddUsers",
    props: {
        user: Object // { firstName: string, lastName: string, age: number, email: email }
    },
    methods: {
        onAddUser() {
            this.$emit('userAdded', this.form)
        }
    },
    data() {
        return {
            // form: this.user ? this.user : {
            //     firstName: "",
            //     lastName: "",
            //     age: "",
            //     email: ""
            // }
            form: this.user || { firstName: "", lastName: "", age: "", email: "" }
        }
    }
})
</script>
<style scoped lang="scss">
.newUser-form {
    margin: 5px auto;
    padding: 10px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .input__field {
        padding-bottom: 10px;
        width: 250px;
        text-align: left;

        label {
            display: block;
            font-weight: bold;
        }

        input {
            padding: 10px;
            width: 230px;
            border: 1px solid #fff;
            border-radius: 5px;
            outline: 0;
            background: #f8edcf;
        }

    }

    button {
        margin-top: 30px;
        padding: 10px;
        width: 250px;
        color: #f8edcf;
        border: 1px solid #fff;
        border-radius: 5px;
        outline: 0;
        background: #434141;
    }
}
</style>