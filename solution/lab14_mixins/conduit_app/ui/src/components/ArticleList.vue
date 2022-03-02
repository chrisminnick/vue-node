<template>
  <div>
    <input
      class="form-control"
      v-model.number = "searchDetails"
      placeholder="filter articles"
    >    
    <div v-if="articles.length === 0" class="article-preview">
      No articles are here ..yet.
    </div>
    <ArticlePreview
      v-for="(article, index) in filterIt"
      :article="article"
      :key="article.title + index"
      :style="{ fontSize: articleFontSize + 'em' }"
    />
  </div>
</template>

<script>
import ArticlePreview from './ArticlePreview.vue'
// import articles from '../json/articles.json';
import ApiService from "../common/api.service.js"

export default {
    name: "ArticleList",
    components: {
        ArticlePreview
    },
    data() {
        return {
            // articles: articles,
            articles: [],
            articleFontSize:1,
            searchDetails: ''
        }
    },
    async mounted() {
          let results = await this.fetchArticles();
          this.articles = results.data.articles;
          console.log(this.articles);
    },      
    methods: {
    fetchArticles() {
      console.log("fetching articles");
      return ApiService.query("articles").catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
    }
  }, 
  computed: {
    filterIt: function() {
      var self = this;
      return this.articles.filter(function(a) {
        return a.title.indexOf(self.searchDetails) > 1
      }
      )
    }
  }
}
</script>
<style>
</style>