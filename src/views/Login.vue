<script setup lang="ts">
  import { encryptLogin } from '../utils/crypto'
</script>

<template>
  <section class="base-container">
    <section
      class="font-oxanium bg-grass-img shadow-custom bg-no-repeat bg-cover bg-center z-10 lg:h-4/5 lg:w-96 md:h-4/6 md:w-80 sm:none"
    >
      <section></section>
    </section>
    <form
      class="flex flex-col justify-between bg-white shadow-custom font-oxanium p-8 h-4/5 w-4/5 lg:h-3/5 lg:w-2/5 md:h-2/4 md:w-96 sm:h-4/5 sm:w-4/5"
    >
      <h1 class="text-2xl font-extrabold">Login</h1>
      <section>
        <input
          id="userName"
          v-model="username"
          class="base-input"
          type="text"
          name="userName"
          placeholder="Nome de usuário"
          @input="usernameCheck = false"
        />
        <p
          v-if="usernameCheck"
          class="block h-max text-xs text-red-500 font-light my-2"
        >
          *nome de usuário obrigatório.
        </p>
      </section>

      <section>
        <input
          id="userPassword"
          v-model="userpass"
          class="base-input"
          type="password"
          name="userPassword"
          placeholder="Senha"
          @input="userpassCheck = false"
        />
        <p
          v-if="userpassCheck"
          class="block h-max text-xs text-red-500 font-light my-2"
        >
          *senha obrigatória.
        </p>
      </section>
      <button class="base-btn" @click.prevent="handleLogin">Entrar</button>
    </form>
  </section>
</template>

<script lang="ts">
  export default {
    data: function () {
      return {
        usernameCheck: false,
        userpassCheck: false,
        username: '',
        userpass: '',
      }
    },
    methods: {
      checkForm() {
        let check = true

        if (this.username == '') {
          this.usernameCheck = true
          check = false
        }

        if (this.userpass == '') {
          this.userpassCheck = true
          check = false
        }

        return check
      },

      handleLogin() {
        const check = this.checkForm()

        if (check == true) {
          const { username, password } = encryptLogin(
            this.username.toString(),
            this.userpass.toString()
          )

          fetch('http://186.237.58.167:65129/api/user/login', {
            method: 'POST',
            body: { Username: username, UserPassword: this.userpass },
          })
            .then((res) => {
              console.log(res)
            })
            .catch((err) => {
              console.error(`!ERROR!: ${err}`)
            })

          // const id = 0

          // console.log(username)
          // console.log(password)

          // this.$router.push({ path: `/dashboard/${id}/info` })
        }
      },
    },
  }
</script>
