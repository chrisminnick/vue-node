<template>
  <div>
    <div v-if="filteredArticles.length === 0" class="article-preview">
      No articles are here... yet.
    </div>
    <input
      class="form-control"
      v-model.number="searchDetails"
      placeholder="filter articles"
    />

    <ArticlePreview
      v-for="(article, index) in filteredArticles"
      :article="article"
      :key="article.title + index"
      :style="{ fontSize: articleFontSize + 'em' }"
      @enlarge-text="articleFontSize += 0.1"
      @shrink-text="articleFontSize -= 0.1"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

import ArticlePreview from './ArticlePreview.vue';
import { useArticlesStore } from '../stores/articles';

export default defineComponent({
  name: 'ArticleList',
  components: {
    ArticlePreview,
  },
  setup() {
    const articles = useArticlesStore(); // useArticlesStore is a method in the store
    const searchDetails = ref('');

    const filteredArticles = computed(() =>
      articles.filterArticles(searchDetails.value)
    );
    articles.fetchArticles(); // fetchArticles is a method in the store

    return {
      articles,
      searchDetails,
      filteredArticles,
      articleFontSize: 1,
    };
  },
});
</script>
