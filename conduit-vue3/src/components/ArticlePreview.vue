<template>
  <div class="article-preview">
    <h1 v-text="article.title" />
    <button
      class="btn btn-sm float-right"
      v-on:click="toggleFavorite($event)"
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
import type { Article } from './types';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'ArticlePreview',
  props: {
    article: {
      type: Object as PropType<Article>,
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
    toggleFavorite(event: Event) {
      this.favorited = !this.favorited;
      this.favoritesCount++;
      console.log('favorited = ' + this.favorited);
    },
  },
});
</script>
