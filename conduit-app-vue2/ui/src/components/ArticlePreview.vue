<template>
  <div class="article-preview">
    <h1 v-text="article.title" />
    <button
      class="btn btn-sm float-right"
      v-on:click="toggleFavorite"
      :class="{
        'btn-primary': favorited,
        'btn-outline-primary': !favorited,
      }"
    >
      <i class="ion-heart"></i>
      <span class="counter"> {{ this.favoritesCount }} </span>
    </button>
    <button style="margin: 3px" v-on:click="$emit('enlarge-text', 0.1)">
      Enlarge Text
    </button>
    <button style="margin: 3px" v-on:click="$emit('shrink-text', 0.1)">
      Shrink Text
    </button>
    <p v-text="article.description" />
    <span><a :href="articleLink.slug">Read more...</a></span>
  </div>
</template>
<script>
export default {
  name: 'ArticlePreview',
  props: {
    article: { type: Object, required: true },
  },
  computed: {
    articleLink() {
      return {
        slug: this.article.slug,
      };
    },
  },
  data: function () {
    return {
      favorited: false,
      favoritesCount: 0,
    };
  },
  methods: {
    toggleFavorite: function () {
      this.favorited = !this.favorited;
      this.favoritesCount++;
      console.log('favorited = ' + this.favorited);
    },
  },
};
</script>
