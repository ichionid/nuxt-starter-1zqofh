<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $http }) {
    // Make a GET request to the API endpoint
    const { data: posts } = await $http.get('/api/posts');

    return { posts };
  },
};
</script>
