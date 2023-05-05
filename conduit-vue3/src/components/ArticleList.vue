<template>
  <div>
    <div v-if="filteredArticles.value.length === 0" class="article-preview">
      No articles are here... yet.
    </div>
    <input
      class="form-control"
      v-model.number="searchDetails"
      placeholder="filter articles"
    />

    <ArticlePreview
      v-for="(article, index) in filteredArticles.value"
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
import { useArticles } from '../common/useArticles';
import useFilterArticles from '../common/useFilterArticles';

export default defineComponent({
  name: 'ArticleList',
  components: {
    ArticlePreview,
  },
  setup() {
    const { state, fetchArticles } = useArticles();
    const searchDetails = ref('');

    const filteredArticles = computed(() =>
      useFilterArticles(state.articles, searchDetails.value)
    );

    fetchArticles();

    return {
      state,
      searchDetails,
      filteredArticles,
      articleFontSize: 1,
    };
  },
});
</script>
