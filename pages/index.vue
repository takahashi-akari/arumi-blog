<template>
  <div>
    <h1 class="text-h4" style="margin: 0.25em">・記事一覧</h1>
    <ContentList v-slot="{ list }" :query="{ path: '/blog' }">
      <article v-for="page in list" :key="page._path">
        <v-card
          :title="page.title"
          :subtitle="page.createdAt"
          :text="page.description"
          variant="outlined"
          style="margin: 1em"
        >
          <v-card-actions>
            <v-btn text>
              <nuxt-link :to="page._path"> Read More </nuxt-link>
            </v-btn>
          </v-card-actions>
        </v-card>
      </article>
    </ContentList>
  </div>
</template>

<script>
export default {
  // list
  async fetch() {
    this.list = await this.$content("blog").fetch();
  },
  head() {
    return {
      title: "Arumi Blog - Arumiブログ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Arumiブログは、さまざまな情報を発信するブログです。",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://takahashi-akari.github.io/arumi-blog/",
        }, //絶対パス
        {
          hid: "og:title",
          property: "og:title",
          content: "Arumi Blog - Arumiブログ",
        },
      ],
    };
  },
};
</script>
