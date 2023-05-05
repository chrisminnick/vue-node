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
    <button v-on:click="$emit('enlarge-text', 0.1)">Enlarge Text</button>
    <button v-on:click="$emit('shrink-text', 0.1)">Shrink Text</button>
    <p
      v-text="article.description"
      :style="{ fontSize: descriptionFontSize + 'em' }"
    />
    Tags:
    <ul>
      <li v-for="tag in article.tagList">
        <TagItem>{{ tag }}</TagItem>
      </li>
    </ul>
    <div><a :href="articleLink.slug">Read more...</a></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TagItem from './TagItem.vue';
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
      descriptionFontSize: 1,
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
