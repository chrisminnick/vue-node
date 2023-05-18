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
import type { Article } from './types';

export default defineComponent({
  name: 'ArticleList',
  components: {
    ArticlePreview,
  },
  data() {
    return {
      articles: [] as Article[],
      articleFontSize: 1,
    };
  },
  methods: {
    fetchArticles() {
      console.log('fetching articles');
      return this.axios.get('articles').catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
    },
  },
  async mounted() {
    let results = await this.fetchArticles();
    this.articles = results.data.articles;
    console.log(this.articles);
  },
});
</script>
