<template>
  <div>
    <div v-if="articles.length === 0" class="article-preview">
      No articles are here... yet.
    </div>
    <ArticlePreview
      v-for="(article, index) in articles"
      :article="article"
      :key="article.title + index"
      :style="{ fontSize: articleFontSize + 'em' }"
      v-on:enlarge-text="articleFontSize += 0.1"
      v-on:shrink-text="articleFontSize -= 0.1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticlePreview from './ArticlePreview.vue';
import articlesData from '../json/articles.json';
import type { Article } from './types';

const articles = articlesData as Article[];

export default defineComponent({
  name: 'ArticleList',
  components: {
    ArticlePreview,
  },
  data() {
    return {
      articles,
      articleFontSize: 1,
    };
  },
});
</script>
