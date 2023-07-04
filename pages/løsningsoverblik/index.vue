<template>
  <div class="px-12 lg:px-48">
    <Tabs :items="navigationItems" />
    <h1 class="text-4xl font-bold pb-4">Om It-overblik</h1>
    <p>
      It-overblik er en fælles central indgang til informationer om
      Skatteministeriets koncerns systemportefølje. It-overbliks primære formål
      er, at vise systemernes nøgleinformationer samt den organisatoriske
      tilknytning til forretningen og driften. It-overblik driftes af Center for
      Strategisk Arkitektur kontoret, men oprettelse og vedligeholdelse af
      systemer varetages som udgangspunkt af systemejerne. Oprettelse af
      systemer, moduler eller platforme på It-overblik sker via MitIT. Bemærk
      retningslinjer her for navngivning som skal følges.
    </p>
    <br />
    Hvis du har ønsker til design- og funktionalitetsændringer bedes du udfylde
    en blanket på Mit-IT, som du finder via. link i footeren eller her. De vil
    efterfølgende blive behandlet og prioriteret af en samling af kontorchefer,
    som repræsenterer alle direktørområder i Udviklings- og
    Forenklingsstyrelsen. Hvis du ønsker at bestille dataudtræk eller forespørge
    på muligheden for at integrere It-overblik med andre af Skatteministeriets
    koncerns værktøjer, skal du benytte samme blanket som ovenstående.
    Navigation It-overblik er opdelt i syv menupunkter: Systemer, Platforme,
    It-løsninger, Personale, Webservices, Begreber og Om it-overblik. Derudover
    finder du en liste over kritiske systemer, platforme og netværk på forsiden
    under ”Kritikalitet”. Øverst på siden kan du trykke på It-overblik, som på
    et hvert tidspunkt vil føre dig tilbage til hovedmenuen. Under hver menu er
    det muligt at få et overblik over Skatteministeriets koncerns systemer,
    løsninger mm. samt anvende menuen listet til venstre til at indsnævre
    informationer på siden. Hvis du ønsker at se en generisk visning over alt
    data på It-overblik, så har du mulighed for at skifte til Generisk visning.
    Dette gøres ved at vælge det system, platform, løsning, personale,
    webservice eller begreb og derefter vælge 'Generisk', som du finder øverst i
    højre hjørne. Det er også muligt at skifte til System Architect under
    systemer, webservice og begreber - denne er placeret ved siden af Generisk
    øverst i højre hjørne. Hvis du søger en specifik komponent, kan du i stedet
    bruge søgefunktionen som du finder i øverste højre hjørne. Opdatering af
    systemer Du har mulighed for at opdatere informationer om systemer,
    platforme, løsninger og personale på It-overblik. Dette gøres ved først at
    vælge det system, platform, løsning eller personale, som du ønsker at ændre,
    og dernæst trykke på 'Rediger' som du finder i højre hjørne. Herefter kan
    informationerne opdateres på siden og handlingen afsluttes ved at trykke
    'Gem' i nederste højre hjørne. Bemærk at der kan gå noget tid før
    opdateringerne er synlige på It-overblik. *Du har ikke selv mulighed for at
    angive om et system eller platform hhv. er forretningskritisk og/eller
    samfundskritisk på It-overblik, men hvis du mener et system eller platform
    bør være angivet som forretningskritisk eller samfundskritisk, bedes du
    kontakte kontoret 'Informationssikkerhed' for nærmere information om
    proceduren. Changelog for It-overblik Det er også muligt at se changelog for
    et enkelt system eller modul. Den findes ved at klikke på senest ændret
    datoen over systemnavnet på et systems eller moduls side. Rapporter for
    It-overblik (Power BI) Du kan se rapporter og udtræk for It-overblik via
    Power BI. Følg guiden her.
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigationItems: [
        { label: 'Oversigt', url: '/about' },
        {
          label: 'Begrebsafklaringsmodellen',
          url: '/about/begrebsafklaringsmodellen',
        },
        {
          label: 'It overbliks arkitektur',
          url: '/about/it-overbliks-arkitektur',
        },
        { label: 'Ændringslog', url: '/about/Ændringslog' },
      ],
    };
  },
};
</script>
