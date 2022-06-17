<script setup lang="ts">
import "~~/styles/main.scss";

useHead({
  title: "Nuxt3 Example",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;300;400;600;700&display=swap",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <div class="wrap">
      <base-header />

      <div class="wrap__main">
        <NuxtPage />
      </div>

      <base-footer />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.wrap__main {
  width: 100%;
  display: block;
  flex: 1;
}
</style>
