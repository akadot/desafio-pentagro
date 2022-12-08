<script setup lang="ts">
  import FormVue from './Form.vue'
</script>

<template>
  <section class="flex flex-col justify-between">
    <h1 class="text-xl font-bold">Registrar Usuário</h1>

    <FormVue :username="''" :fullname="''" :email="''" />

    <button class="base-btn">Adicionar Usuario</button>
  </section>
</template>
