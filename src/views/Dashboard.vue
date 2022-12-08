<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section class="base-container bg-grass-mobile font-oxanium">
    <section class="bg-white h-4/5 w-3/4 shadow-custom flex">
      <nav
        class="bg-main flex flex-col text-left py-3 w-32 text-light font-medium"
      >
        <RouterLink
          to="/dashboard"
          class="py-5 pl-5 w-full hover:bg-white hover:text-main"
        >
          Listar Usuários
        </RouterLink>
        <RouterLink
          to="/dashboard/register"
          class="py-5 pl-5 w-full hover:bg-white hover:text-main"
        >
          Registrar Usuário
        </RouterLink>
        <RouterLink
          to="/login"
          class="py-5 pl-5 w-full hover:bg-white hover:text-red-500 hover:font-bold"
        >
          Sair
        </RouterLink>
      </nav>
      <RouterView :key="$route.path" class="p-8 w-full"></RouterView>
    </section>
  </section>
</template>
