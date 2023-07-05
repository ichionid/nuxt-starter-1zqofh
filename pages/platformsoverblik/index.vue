<script setup>
const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch(runtimeConfig.public.apiBase + 'platforms', {
  transform: (platforms) => {
    return platforms.map((platform) => ({
      title:
        '<a href="platformsoverblik/platform/' +
        platform.id +
        '">' +
        platform.Title +
        '</a>',
    }));
  },
});
</script>

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
      <Table :items="data" :headers="['Platform']" />
      <!-- Content to render when data is not available -->
    </div>
  </div>
</template>
