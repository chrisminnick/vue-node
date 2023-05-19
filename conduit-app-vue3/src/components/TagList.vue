<template>
  <div class="tag-list">
    <div v-if="tags.length === 0">No Tags are here... yet.</div>
    <ul class="tag-list">
      <li v-for="tag in tags" class="tag-default tag-pill tag-outline">
        <TagItem>
          {{ tag }}
        </TagItem>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TagItem from './TagItem.vue';

export default defineComponent({
  name: 'TagList',
  components: {
    TagItem,
  },
  data() {
    return {
      tags: [],
    };
  },
  async mounted() {
    let results = await this.fetchTags();
    this.tags = results.data.tags;
    console.log(this.tags);
  },
  computed: {},
  methods: {
    fetchTags() {
      console.log('fetching tags');
      return this.axios.get('tags').catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
    },
  },
});
</script>
