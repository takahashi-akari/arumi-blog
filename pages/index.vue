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
    // createdAtでソート
    this.list = this.list.sort((a, b) => {
      return a.createdAt < b.createdAt ? 1 : -1;
    });
  },
};
</script>
