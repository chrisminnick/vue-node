<template>
  <div class="article-preview">
    <h1 v-text="article.title" />
    <button
      class="btn btn-sm float-right"
      v-on:click="toggleFavorite"
      :class="{
        'btn-primary': favorited,
        'btn-outline-primary': !favorited,
      }"
    >
      <i class="ion-heart"></i>
      <span class="counter"> {{ favoritesCount }} </span>
    </button>
    <p v-text="article.description" />
    <span><a :href="articleLink.slug">Read more...</a></span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ArticlePreview',
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
  computed: {
    articleLink(article: Article) {
      return {
        slug: article.slug,
      };
    },
  },
  data: function () {
    return {
      favorited: false as Boolean,
      favoritesCount: 0 as number,
    };
  },
  methods: {
    toggleFavorite() {
      this.favorited = !this.favorited;
      this.favoritesCount++;
      console.log('favorited = ' + this.favorited);
    },
  },
};
</script>
