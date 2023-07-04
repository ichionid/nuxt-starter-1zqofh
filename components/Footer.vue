<template>
  <div class="flex flow-row py-2">
    <nuxt-picture
      class="basis-1/4"
      src="https://overblik.ccta.dk/overblik/images/ufst-logo-white.svg"
      width="3750"
      height="2500"
      sizes="xs:200px md:500px lg:1024"
    />
    <Address class="basis-1/4" />
    <nav class="basis-1/4">
      <ul class="flex flex-col">
        <li
          class="min-w-min"
          v-for="(item, index) in primarySubmenuItems"
          :key="index"
        >
          <a class="min-w-min" :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
    <nav class="basis-1/4">
      <ul class="flex flex-col">
        <li
          class="basis-1/8 min-w-min"
          v-for="(item, index) in secondarySubmenuItems"
          :key="index"
        >
          <a class="min-w-min" :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      primarySubmenuItems: [
        { label: 'Portefølje', url: '/portefoeljeoverblik' },
        { label: 'Changelog', url: '/changelog' },
        { label: 'Om It-overblik', url: '/about' },
        { label: 'Begrebsafklarings-model', url: '/begrebsafklaring' },
      ],
      secondarySubmenuItems: [
        {
          label: 'Opret system eller modul på It-overblik',
          url: 'https://skat-myit.onbmc.com/dwp/app/#/srm/profile/SRGEF5VEC8RP3AR0YEIWRJYQKMTBH2/srm',
        },
        {
          label: 'Opret ændringsønske til It-overblik',
          url: 'https://skat-myit.onbmc.com/dwp/app/#/srm/profile/SRGAA5V0F53B1AP13V73P07C6WGC7P/srm',
        },
        {
          label: 'Rapporter fejl på It-overblik',
          url: 'https://skat-myit.onbmc.com/dwp/app/#/srm/profile/SRGEF5VEC8RP3AR1BKL5R0CGXFI2S1/srm',
        },
      ],
    };
  },
};
</script>
