<script setup lang="ts">
  import type { Units } from '../types/Units'
  import { encryptPass } from '../utils/crypto'
</script>

<template>
  <form class="flex flex-col justify-between gap-y-3 w-full">
    <section class="flex w-full gap-x-8">
      <section class="flex flex-col w-full">
        <label for="username" class="base-label">Login</label>
        <input
          id="username"
          v-model="localUsername"
          type="text"
          class="base-input"
        />
      </section>
      <select v-model="localUnitId" class="border-b-2 border-main">
        <option v-for="unit in units" :key="unit.id" :value="unit.name">
          {{ unit.name }}
        </option>
      </select>
    </section>

    <section class="flex w-full gap-x-8">
      <section class="flex flex-col w-full">
        <label for="fullName" class="base-label">Nome completo</label>
        <input
          id="fullName"
          v-model="localFullName"
          type="text"
          class="base-input"
        />
      </section>
      <section class="flex flex-col w-full">
        <label for="email" class="base-label">E-mail</label>
        <input
          id="email"
          v-model="localemail"
          type="email"
          class="base-input"
        />
      </section>
    </section>

    <section class="flex w-full gap-x-8">
      <section class="flex flex-col w-full">
        <label for="password" class="base-label">Senha</label>
        <input
          id="password"
          v-model="localPassword"
          type="password"
          class="base-input"
        />
      </section>
      <section class="flex flex-col w-full">
        <label for="repeatPassword" class="base-label"
          >Confirmação de senha</label
        >
        <input
          id="repeatPassword"
          v-model="localRepeatPassword"
          type="password"
          class="base-input"
        />
      </section>
    </section>

    <section class="flex w-full pt-4 gap-x-5 items-end">
      <input
        id="tokenExpire"
        v-model="localTokenExp"
        type="number"
        class="base-input"
      />
      <section class="flex w-full items-center">
        <input id="receiveAlert" v-model="localWarnings" type="checkbox" />
        <label for="receiveAlert" class="text-sm pl-3">Receber Alertas?</label>
      </section>
      <section class="flex w-full items-center">
        <input id="dealTickets" v-model="localTickets" type="checkbox" />
        <label for="dealTickets" class="text-sm pl-3"
          >Tratar Ocorrências?</label
        >
      </section>
      <section class="flex w-full items-center">
        <input id="disableUser" v-model="localDisabledUser" type="checkbox" />
        <label for="disableUser" class="text-sm pl-3"
          >Desabilitar Usuário?</label
        >
      </section>
    </section>
    <p class="text-sm text-red-500 font-regular mt-2">
      {{ errorMsg ? errorMsg : '' }}
    </p>
    <button class="mt-4 base-btn w-full" @click.prevent="sendForm">
      {{ btnName }}
    </button>
  </form>
</template>

<script lang="ts">
  export default {
    props: {
      id: { type: Number, default: 0 },
      username: { type: String, default: '' },
      fullname: { type: String, default: '' },
      email: { type: String, default: '' },
      tokenExpiration: { type: Number, default: 0 },
      warnings: { type: Boolean, default: false },
      tickets: { type: Boolean, default: false },
      disabledUser: { type: Boolean, default: false },
      unitId: { type: Number, default: 0 },
      btnName: { type: String, default: '' },
      action: { type: String, default: '' },
    },
    data: () => ({
      units: [] as Units[],
      localID: 0,
      localUsername: '',
      localFullName: '',
      localemail: '',
      localTokenExp: 0,
      localWarnings: false,
      localTickets: false,
      localDisabledUser: false,
      localPassword: '',
      localRepeatPassword: '',
      localUnitId: { unitid: 0, unitTxt: '' },
      errorMsg: '',
    }),
    created() {
      this.localID = this.id
      this.localUsername = this.username
      this.localFullName = this.fullname
      this.localemail = this.email
      this.localTokenExp = this.tokenExpiration
      this.localWarnings = this.warnings
      this.localTickets = this.tickets
      this.localDisabledUser = this.disabledUser
      this.localUnitId.unitid = this.unitId
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
          .catch((err) => console.error(err))
      },
      checkForm() {
        let check = true

        if (
          this.localUsername == '' ||
          this.localFullName == '' ||
          this.localemail == '' ||
          this.localPassword == '' ||
          this.localRepeatPassword == '' ||
          this.localUnitId.unitid == 0
        ) {
          this.errorMsg = '*Preencha todos os campos antes de finalizar.'
          check = false
        } else if (this.localPassword != this.localRepeatPassword) {
          this.errorMsg =
            '*Os campos de Senha e Confirmação de Senha não coincidem.'
          check = false
        }

        return check
      },
      addUser() {
        const tokenAPI = localStorage.getItem('api-token')

        const check = this.checkForm()

        if (check == true) {
          const encPassword = encryptPass(this.localPassword.toString())

          const newUserObj = {
            id: 0,
            userName: this.localUsername,
            name: this.fullname,
            UserPassword: encPassword,
            email: this.localemail,
            improveTeamMember: true,
            supervisor: this.localTickets,
            receiveAutonomousWarning: this.localWarnings,
            loginExpiration: this.tokenExpiration,
            disabled: this.localDisabledUser,
            system: 'G',
            unitId: this.localUnitId.unitid,
          }

          fetch('http://186.237.58.167:65129/api/user/saveuser', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${tokenAPI}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserObj),
          })
            .then((res) => {
              window.alert('Usuário criado com sucesso.')
              console.log(res)
            })
            .catch((err) => console.log(err))
        }
      },
      editUser() {
        const tokenAPI = localStorage.getItem('api-token')

        const check = this.checkForm()

        if (check == true) {
          const encPassword = encryptPass(this.localPassword.toString())

          const newUserObj = {
            id: this.localID,
            userName: this.localUsername,
            name: this.fullname,
            UserPassword: encPassword,
            email: this.localemail,
            improveTeamMember: true,
            supervisor: this.localTickets,
            receiveAutonomousWarning: this.localWarnings,
            loginExpiration: this.tokenExpiration,
            disabled: this.localDisabledUser,
            system: 'G',
            unitId: this.localUnitId,
          }

          fetch('http://186.237.58.167:65129/api/user/saveuser', {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${tokenAPI}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserObj),
          })
            .then((res) => {
              window.alert('Usuário editado com sucesso.')
              console.log(res)
            })
            .catch((err) => console.log(err))
        }
      },
      sendForm() {
        if (this.action == 'update') {
          this.editUser()
        } else if (this.action == 'add') {
          this.addUser()
        }
      },
    },
  }
</script>
