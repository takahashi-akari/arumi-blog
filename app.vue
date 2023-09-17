<template>
  <v-app>
    <v-app-bar
      title="Arumi Blog - Arumiブログ"
      app
      color="primary"
      dark
      prominent
      style="position: relative"
    >
      <nuxt-link to="/" style="margin-right: 3em">
        <v-btn color="white"> Homeへ </v-btn>
      </nuxt-link>
    </v-app-bar>
    <div>
      <NuxtPage />
    </div>
    <v-footer color="primary" app dark prominent style="position: relative">
      <!-- 右寄せ -->
      <v-row justify="center" no-gutters>
        <v-col class="text-center mt-4" cols="12">
          <nuxt-link to="/" style="margin-right: 3em">
            <v-btn color="primary"> Homeへ </v-btn>
          </nuxt-link>
        </v-col>
        <v-col class="text-center mt-4" cols="12">
          Copyright (c) {{ new Date().getFullYear() }} —
          <strong>Akari Takahashi</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
