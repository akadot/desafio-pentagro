<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  // fetch('http://186.237.58.167:65129/api/user/login', {
  //   method: 'POST',
  //   body: {
  //     Username: base64user,
  //     UserPassword: base64pass,
  //   },
  // })
  //   .then((res) => {
  //     console.log(res)
  //     console.log(base64user)
  //     console.log(md5pass.toString())
  //     console.log(base64pass)
  //   })
  //   .catch((err) => console.error(`ERRO API: ${err}`))
</script>

<template>
  <section class="base-container bg-grass-mobile font-oxanium">
    <section class="bg-white h-4/5 w-3/4 shadow-custom flex">
      <nav
        class="bg-main flex flex-col text-left py-3 w-32 text-light font-medium"
      >
        <RouterLink
          to="info"
          class="py-5 pl-5 w-full hover:bg-white hover:text-main"
        >
          Info
        </RouterLink>
        <RouterLink
          to="list"
          class="py-5 pl-5 w-full hover:bg-white hover:text-main"
        >
          List
        </RouterLink>
        <RouterLink
          to="register"
          class="py-5 pl-5 w-full hover:bg-white hover:text-main"
        >
          Register
        </RouterLink>
        <RouterLink
          to="edit"
          class="py-5 pl-5 w-full hover:bg-white hover:text-main"
        >
          Edit
        </RouterLink>
        <RouterLink
          to="/login"
          class="py-5 pl-5 w-full hover:bg-white hover:text-red-500"
        >
          Logout
        </RouterLink>
      </nav>
      <RouterView :key="$route.fullPath"></RouterView>
    </section>
  </section>
</template>
