<script setup lang="ts">
  import type { User } from '../types/User'

  import CustomTable from './Table.vue'
  import EditModalVue from './EditModal.vue'
</script>

<template>
  <section class="flex flex-col">
    <h1 class="text-xl font-bold">Usuários Cadastrados</h1>
    <p v-if="usersList.length < 1" class="pt-3">Nenhum usuário encontrado.</p>
    <section class="block max-h-full overflow-y-scroll">
      <CustomTable :users="usersList" @open-modal="openModal" />
    </section>
    <section class="flex pt-10">
      <p class="font-bold">
        Usuários Ativos:
        <span class="font-normal">{{ usersList.length - disabledCount }}</span>
      </p>
      <p class="font-bold pl-5">
        Usuários Inativos: <span class="font-normal">{{ disabledCount }}</span>
      </p>
      <p class="font-bold pl-5">
        Total de Usuários:
        <span class="font-normal">{{ usersList.length }}</span>
      </p>
    </section>
    <section
      v-if="showModal"
      class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
    >
      <EditModalVue :user="selectedUserEdit" @close-modal="closeModal" />
    </section>
  </section>
</template>

<script lang="ts">
  export default {
    components: {
      EditModalVue,
    },
    data: () => ({
      usersList: [] as User[],
      disabledCount: 0,
      showModal: false,
      selectedUserEdit: {} as User,
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
          .then((data) => {
            this.usersList = data
            this.disabledCount = this.usersList.filter(
              (item) => item.disabled == true
            ).length
          })
          .catch((err) => console.error(err))
      },
      openModal(selectedUser: User) {
        this.showModal = true
        this.selectedUserEdit = selectedUser
      },
      closeModal() {
        this.showModal = false
      },
    },
  }
</script>
