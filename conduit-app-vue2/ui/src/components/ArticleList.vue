<template>
  <div>
    <div v-if="isLoading" class="article-preview">Loading articles...</div>
    <div v-else>
      <div v-if="articles.length === 0" class="article-preview">
        No articles are here ..yet.
      </div>
      <input
        class="form-control"
        v-model.number="searchDetails"
        placeholder="filter articles"
      />

      <ArticlePreview
        v-for="(article, index) in filterIt"
        :article="article"
        :key="article.title + index"
        :style="{ fontSize: articleFontSize + 'em' }"
        v-on:enlarge-text="articleFontSize += $event"
        v-on:shrink-text="
          articleFontSize === 1 ? 1 : (articleFontSize -= $event)
        "
      />
    </div>
  </div>
</template>
<script>
import ArticlePreview from './ArticlePreview.vue';
import filterIt from '../mixins/filter';
import { mapGetters } from 'vuex';
import { FETCH_ARTICLES } from '../store/actions.type';

export default {
  name: 'ArticleList',
  components: {
    ArticlePreview,
  },
  data() {
    return {
      articleFontSize: 1,
      searchDetails: '',
    };
  },
  methods: {
    fetchArticles() {
      this.$store.dispatch(FETCH_ARTICLES, this.listConfig);
    },
  },
  computed: {
    ...mapGetters(['articlesCount', 'isLoading', 'articles']),
    listConfig() {
      const { type } = this;

      return {
        type,
      };
    },
  },
  mounted() {
    this.fetchArticles();
  },

  mixins: [filterIt],
};
</script>

<style></style>
