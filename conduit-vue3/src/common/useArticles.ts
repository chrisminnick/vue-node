import axios from 'axios';
import { reactive } from 'vue';
import type { Article } from '../components/types';

export function useArticles() {
  const state = reactive({
    articles: [] as Article[],
  });

  async function fetchArticles() {
    try {
      const response = await axios.get('articles');
      state.articles = response.data.articles;
    } catch (error) {
      throw new Error(`[RWV] ApiService ${error}`);
    }
  }

  return {
    state,
    fetchArticles,
  };
}
