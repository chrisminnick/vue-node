<template>
  <div class="article-preview">
    <h1 v-text="article.title" />
    <button
      class="btn btn-sm float-right"
      v-on:click="toggleFavorite()"
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
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArticlePreview',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    articleLink(): { slug: string } {
      return {
        slug: this.article.slug,
      };
    },
  },
  data() {
    return {
      favorited: false,
      favoritesCount: 0,
    };
  },
  methods: {
    toggleFavorite() {
      this.favorited = !this.favorited;
      this.favoritesCount++;
      console.log('favorited = ' + this.favorited);
    },
  },
});
</script>
