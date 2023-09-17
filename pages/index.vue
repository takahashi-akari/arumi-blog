<template>
  <div>
    <h1>Arumi Blog - Arumiブログ</h1>
    <h2>・記事一覧</h2>
    <ContentList v-slot="{ list }" :query="{ path: '/arumi-blog/blog'}">
      <article v-for="page in list" :key="page._path">
        <p>{{ page.createdAt }}</p>
        <nuxt-link :to="page._path">
          <h3>{{ page.title }}</h3>
            <p>{{ page.description }}</p>
        </nuxt-link>
      </article>
    </ContentList>
  </div>
</template>

<script>
export default {
    // list
    async fetch() {
        this.list = await this.$content('blog').fetch()
    },
}
</script>