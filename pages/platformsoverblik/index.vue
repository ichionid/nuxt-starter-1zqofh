<template>
  <div>
    <div class="px-12 lg:px-48">
      <h1 class="text-4xl font-bold pb-4">Platforme</h1>
      <p>
        Skatteministeriets koncerns systemer driftes på forskellige platforme.
        Platforme defineres som alle de lag i teknologistakken, som ligger under
        applikation. På listen kan du se en oversigt over alle platforme i
        Skatteministeriets koncern og de systemer der tilhører platformene. Hvis
        du ønsker at læse mere om eller tilføje oplysninger til en platform
        eller et system kan du klikke på det. Vær opmærksom på at alle platforme
        indeholde ét eller flere forretningskritiske systemer.
      </p>
      <div v-if="pending">
        Fuck
        <!-- Content to render when data is available -->
      </div>

      <div v-else>
        <Table :items="items" />
        <!-- Content to render when data is not available -->
      </div>
    </div>
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
    try {
      const runtimeConfig = useRuntimeConfig();
      const { pending, data } = useFetch( runtimeConfig.public.apiBase + 'platforms',
        {
          transform: (platforms) => {
            return platforms.map((platform) => ({
              title:
                '<a href="plaformsoverblik/platform/' +
                platform.id +
                '">' +
                platform.Title +
                '</a>',
            }));
          },
        },
        lazy: true,
      );
      this.items = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};
</script>
