<template>
  <form class="flex flex-col justify-between gap-y-5 w-full">
    <section class="flex w-full gap-x-8">
      <section class="flex flex-col w-full">
        <label for="username" class="base-label">Login</label>
        <input id="username" type="text" class="base-input" :value="username" />
      </section>
      <select></select>
    </section>

    <section class="flex w-full gap-x-8">
      <section class="flex flex-col w-full">
        <label for="fullName" class="base-label">Nome completo</label>
        <input id="fullName" type="text" class="base-input" :value="fullname" />
      </section>
      <section class="flex flex-col w-full">
        <label for="email" class="base-label">E-mail</label>
        <input id="email" type="email" class="base-input" :value="email" />
      </section>
    </section>

    <section class="flex w-full gap-x-8">
      <section class="flex flex-col w-full">
        <label for="password" class="base-label">Senha</label>
        <input id="password" type="password" class="base-input" />
      </section>
      <section class="flex flex-col w-full">
        <label for="repeatPassword" class="base-label"
          >Confirmação de senha</label
        >
        <input id="repeatPassword" type="password" class="base-input" />
      </section>
    </section>
  </form>
</template>

<script lang="ts">
  export default {
    props: {
      username: { type: String, default: '' },
      fullname: { type: String, default: '' },
      email: { type: String, default: '' },
    },
    created() {},
    methods: {
      getUnits() {},
    }
  }
</script>
