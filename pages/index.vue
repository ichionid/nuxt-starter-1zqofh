<template>
<div>
  <div class="pt-6 space-y-4 mb-6 px-8">
    <p class="p-8 border-black border">
      <h2 class="text-2xl font-bold my-4">Overblik</h2>
      It-overblik er en fælles, central indgang til informationer om
      Skatteministeriets koncerns forretning og systemportefølje. Data bliver
      opdateret løbende.
    </p>
  </div>
  
  <div class="pt-6 space-y-4 mb-6">
    <ul class="flex flex-wrap">
      <li
        class="min-w-[5rem] basis-1/3 py-2 px-8"
        v-for="(item, index) in navigationItems"
        :key="index"
      >
        <a class="min-w-min bg-primary text-center text-white p-4 block w-full" :href="item.url">{{ item.label }}</a>
      </li>
    </ul>
  </div> 
</div> 
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
