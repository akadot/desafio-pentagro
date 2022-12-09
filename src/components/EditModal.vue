<script setup lang="ts">
  import FormVue from './Form.vue'

  import type { User } from '../types/User'
  defineProps<{ user: User }>()
</script>

<template>
  <section
    class="relative top-[45%] left-[58%] -translate-x-[58%] -translate-y-[45%] w-3/5 h-[70%] bg-white p-8"
  >
    <section class="flex justify-between items-center">
      <h1 class="text-xl font-bold pb-2">Editar usuário:</h1>
      <button
        class="text-red-500 font-medium text-sm p-1 hover:bg-red-500 hover:text-white"
        @click="handleModal"
      >
        X Cancelar
      </button>
    </section>
    <FormVue
      :id="user.id"
      :username="user.userName"
      :fullname="user.name"
      :email="user.email"
      :token-expiration="user.loginExpiration"
      :warnings="user.receiveAutonomousWarning"
      :tickets="user.supervisor"
      :disabled-user="user.disabled"
      :unit-id="user.unitId"
      btn-name="Atualizar Usuário"
      action="update"
    />
  </section>
</template>

<script lang="ts">
  export default {
    emits: ['close-modal'],
    methods: {
      handleModal() {
        this.$emit('close-modal')
      },
    },
  }
</script>
