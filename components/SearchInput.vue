<template>
  <div>
    <h1>Example Component</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.Title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    const runtimeConfig = useRuntimeConfig();

    try {
      const response = await fetch(
        runtimeConfig.public.runtimeConfig + '/platforms'
      );
      const data = await response.json();
      console.log('data');
      console.log(data);
      this.items = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};
</script>
