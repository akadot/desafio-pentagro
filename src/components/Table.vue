<script setup lang="ts">
  import type { User } from '../types/User'
  import { PencilSquareIcon } from '@heroicons/vue/24/solid'

  defineProps<{ users: User[] }>()
</script>

<template>
  <section class="table mt-4 w-full">
    <section class="table-header-group">
      <section class="table-row font-extrabold sticky">
        <section class="table-cell">Código</section>
        <section class="table-cell">Nome</section>
        <section class="table-cell">E-mail</section>
        <section class="table-cell">Status</section>
        <section class="table-cell">Editar</section>
      </section>
    </section>
    <section class="table-row-group">
      <section v-for="user in users" :key="user.id" class="table-row">
        <section class="table-cell">{{ user.id }}</section>
        <section class="table-cell">{{ user.name }}</section>
        <section class="table-cell">{{ user.email }}</section>
        <section class="table-cell">
          {{ user.disabled ? 'Inativo' : 'Ativo' }}
        </section>
        <section class="table-cell text-center">
          <button @click="() => handleModal(user)">
            <PencilSquareIcon class="h-5 text-main hover:text-darker" />
          </button>
        </section>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
  export default {
    components: {
      PencilSquareIcon,
    },
    emits: ['open-modal'],
    methods: {
      handleModal(user: User) {
        this.$emit('open-modal', user)
      },
    },
  }
</script>
