<template>
  <div>
    <div v-if="articles.length === 0" class="article-preview">
      No artivles are here ..yet.
    </div>
    <ArticlePreview 
        v-for="(article, index) in articles"
        :article = "article"
        :key = "article.title + index" 
        :style="{fontSize: articleFontSize + 'em'}"
        />
  </div>
</template>

<script>
import ArticlePreview from './ArticlePreview.vue'
import articles from '../json/articles.json';

export default {
    name: "ArticleList",
    components: {
        ArticlePreview
    },
    data() {
        return {
            articles: articles,
            articleFontSize: 1
        }
    }
};
</script>

<style>
</style>