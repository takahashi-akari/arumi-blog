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
          <nuxt-link to="/">
            <v-btn color="primary"> Homeへ </v-btn>
          </nuxt-link>
        </v-col>
        <v-col class="text-center mt-4" cols="12">
          当ブログ記事は、AIによって生成されたコンテンツを含みます。
        </v-col>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Akari Takahashi</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
useHead({
  title: "Arumi Blog - Arumiブログ",
  meta: [
    { property: 'og:url', content: 'https://takahashi-akari.github.io/arumi-blog/' },
    { property: 'og:title', content: "Arumi Blog - Arumiブログ"},
    { property: 'og:description', content: "Arumiブログでは、テクノロジーなど多様なトピックに対する深い洞察を提供しています。" }
  ],
});
</script>
