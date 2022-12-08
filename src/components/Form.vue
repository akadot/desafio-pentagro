<script setup lang="ts">
  import type { Units } from '../types/Units'
</script>

<template>
  <form class="flex flex-col justify-between gap-y-5 w-full">
    <section class="flex w-full gap-x-8">
      <section class="flex flex-col w-full">
        <label for="username" class="base-label">Login</label>
        <input id="username" type="text" class="base-input" :value="username" />
      </section>
      <select class="border-b-2 border-main">
        <option v-for="unit in units" :key="unit.id" :value="unit.name">
          {{ unit.name }}
        </option>
      </select>
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

    <section class="flex w-full pt-4 gap-x-5 items-end">
      <input id="tokenExpire" type="number" class="base-input" value="2" />
      <section class="flex w-full items-center">
        <input id="receiveAlert" type="checkbox" />
        <label for="receiveAlert" class="text-sm pl-3">Receber Alertas?</label>
      </section>
      <section class="flex w-full items-center">
        <input id="dealTickets" type="checkbox" />
        <label for="dealTickets" class="text-sm pl-3"
          >Tratar Ocorrências?</label
        >
      </section>
      <section class="flex w-full items-center">
        <input id="disableUser" type="checkbox" />
        <label for="disableUser" class="text-sm pl-3"
          >Desabilitar Usuário?</label
        >
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
    data: () => ({
      units: [] as Units[],
    }),
    created() {
      this.getUnits()
    },
    methods: {
      getUnits() {
        const tokenAPI = localStorage.getItem('api-token')
        fetch('http://186.237.58.167:65129/api/user/getproductionunitlist', {
          headers: {
            Authorization: `Bearer ${tokenAPI}`,
            'Content-Type': 'application/json',
          },
        })
          .then((res) => {
            return res.json()
          })
          .then((data) => (this.units = data.productionUnitList))
      },
    },
  }
</script>
