<template>
  <nav class="">
    <ul class="flex flex-row border-b border-b-darkgray">
      <li
        :class="linkClasses(item.url)"
        v-for="(item, index) in items"
        :key="index"
      >
        <NavigationItem :url="item.url" :label="item.label" />
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  computed: {
    linkClasses() {
      return (path) => {
        const isActive = this.$route.path === path;
        const baseClasses =
          'basis-1/6 text-center justify-center items-center min-w-min whitespace-nowrap py-2 px-4 hover:border border-lightgray border-b-darkgray';
        // Add or remove classes based on the active state
        if (isActive) {
          console.log('active');
          return `${baseClasses} text-white bg-primary`;
        } else {
          console.log('not');
          return `${baseClasses} text-primary bg-white`;
        }
      };
    },
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
