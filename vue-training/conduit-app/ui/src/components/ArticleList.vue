<template>
  <div>
    <div v-if="articles.length === 0" class="article-preview">
      No articles are here ..yet.
    </div>
    <ArticlePreview
      v-for="(article, index) in articles"
      :article="article"
      :key="article.title + index"
      :style="{ fontSize: articleFontSize + 'em' }"
      v-on:enlarge-text="articleFontSize += $event"
      v-on:shrink-text="articleFontSize === 1 ? 1 : (articleFontSize -= $event)"
    />
  </div>
</template>
<script>
import ArticlePreview from './ArticlePreview.vue';
import ApiService from '../common/api.service.js';

export default {
  name: 'ArticleList',
  components: {
    ArticlePreview,
  },
  data() {
    return {
      articleFontSize: 1,
      articles: [],
    };
  },
  methods: {
    async fetchArticles() {
      console.log('fetching articles');
      return ApiService.query('articles').catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
    },
  },
  async mounted() {
    let results = await this.fetchArticles();
    this.articles = results.data.articles;
    console.log(this.articles);
  },
};
</script>

<style></style>
