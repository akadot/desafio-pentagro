<script setup lang="ts">
  import type { User } from '../types/User'
  import CustomTable from './Table.vue'
</script>

<template>
  <section class="flex flex-col">
    <h1 class="text-xl font-bold">Usuários Cadastrados</h1>
    <p v-if="usersList.length < 1" class="pt-3">Nenhum usuário encontrado.</p>
    <section class="block max-h-full overflow-y-scroll">
      <CustomTable :users="usersList" />
    </section>
  </section>
</template>

<script lang="ts">
  export default {
    data: () => ({
      usersList: [] as User[],
    }),
    created() {
      this.getUsers()
    },
    methods: {
      getUsers() {
        const tokenAPI = localStorage.getItem('api-token')
        fetch('http://186.237.58.167:65129/api/user/getusers', {
          headers: {
            Authorization: `Bearer ${tokenAPI}`,
          },
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => (this.usersList = data))
          .catch((err) => console.error(err))
      },
    },
  }
</script>
