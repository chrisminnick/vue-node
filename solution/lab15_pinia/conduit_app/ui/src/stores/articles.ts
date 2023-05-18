import { defineStore } from 'pinia';
import type { Article } from '../components/types';
import axios from 'axios';
export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articleList: [] as Article[],
  }),
  actions: {
    async fetchArticles() {
      try {
        const response = await axios.get('articles');
        this.articleList = response.data.articles;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },
  },
  getters: {
    filterArticles: (state) => {
      return (searchDetails: string) => {
        const searchQuery = searchDetails.toLowerCase().trim();
        if (!searchQuery) {
          return state.articleList;
        }
        const filtered = state.articleList.filter((article) => {
          const { title, description, body } = article;
          const articleText = `${title} ${description} ${body}`.toLowerCase();
          return articleText.includes(searchQuery);
        });
        return filtered;
      };
    },
  },
});
