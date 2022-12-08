<template>
  <section>
    <h1 class="text-xl font-bold">Registrar Usuário</h1>

    <form class="flex flex-col w-full">
      <section class="flex w-full">
        <section class="flex flex-col">
          <label for="username">Login</label>
          <input id="username" type="text" class="base-input" />
        </section>
        <select></select>
      </section>

      <section class="flex w-full">
        <section class="flex flex-col">
          <label for="fullName">Nome completo</label>
          <input id="fullName" type="text" class="base-input" />
        </section>
        <section class="flex flex-col">
          <label for="email">E-mail</label>
          <input id="email" type="email" class="base-input" />
        </section>
      </section>

      <section class="flex w-full">
        <section class="flex flex-col">
          <label for="password">Senha</label>
          <input id="password" type="password" class="base-input" />
        </section>
        <section class="flex flex-col">
          <label for="repeatPassword">Confirmação de senha</label>
          <input id="repeatPassword" type="password" class="base-input" />
        </section>
      </section>
    </form>
  </section>
</template>
