<template>
  <nav class="flex flex-row px-12 lg:px-48 py-4">
    <ul class="flex flex-row basis-11/12">
      <li
        class="
          basis-1/8
          text-center
          justify-center
          items-center
          min-w-min
          whitespace-nowrap
          px-1
        "
        v-for="(item, index) in navigationItems"
        :key="index"
      >
        <a class="min-w-min" :href="item.url">{{ item.label }}</a>
      </li>
    </ul>
    <input
      class="
        basis-1/12
        py-4
        leading-1
        text-center
        justify-center
        items-center
        px-1
      "
      type="text"
      placeholder="Search.."
    />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navigationItems: [
        { label: 'Systemer', url: '/systemoverblik' },
        { label: 'Platforme', url: '/platformsoverblik' },
        { label: 'IT-løsninger', url: '/løsningsoverblik' },
        { label: 'Personale', url: '/personaleoverblik' },
        { label: 'Webservices', url: '/webserviceoverblik' },
        { label: 'Begreber', url: '/begrebsoverblik' },
        { label: 'Om It-overblik', url: '/about' },
      ],
    };
  },
};
</script>
