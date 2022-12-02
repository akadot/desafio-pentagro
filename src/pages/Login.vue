<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="base-container">
    <section
      class="bg-grass-img shadow-custom bg-no-repeat bg-cover bg-center z-10 lg:h-4/5 lg:w-96 md:h-4/6 md:w-80 sm:none"
    >
      <section></section>
    </section>
    <section
      class="flex flex-col justify-between bg-white shadow-custom p-8 h-4/5 w-4/5 lg:h-3/5 lg:w-2/5 md:h-2/4 md:w-96 sm:h-4/5 sm:w-4/5"
    >
      <h1 class="text-2xl font-extrabold">Login</h1>
      <input
        id="email"
        class="base-input"
        type="email"
        name="email"
        placeholder="E-mail"
      />
      <input
        id="password"
        class="base-input"
        type="password"
        name="password"
        placeholder="Senha"
      />
      <RouterLink
        to="/register"
        class="text-center underline text-main font-medium"
      >
        Ainda não está cadastrado? Crie uma conta.
      </RouterLink>
      <button class="base-btn">Entrar</button>
    </section>
  </section>
</template>
