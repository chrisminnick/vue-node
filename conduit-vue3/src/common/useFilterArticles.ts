import { computed } from 'vue';
import type { Article } from '../components/types';

export default function useFilterArticles(
  articles: Article[],
  searchDetails: string
) {
  const filteredArticles = computed(() => {
    const searchQuery = searchDetails.toLowerCase().trim();

    if (!searchQuery) {
      return articles;
    }

    const filtered = articles.filter((article) => {
      const { title, description, body } = article;
      const articleText = `${title} ${description} ${body}`.toLowerCase();

      return articleText.includes(searchQuery);
    });

    return filtered;
  });

  return filteredArticles;
}
