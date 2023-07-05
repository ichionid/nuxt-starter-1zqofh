<template>
  <table class="table-fixed flex flex-row border-b border-b-darkgray">
    <thead v-if="headers">
      <tr>
        <th v-for="(header, index) in headers" :key="index">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td v-for="(value, valueIndex) in item" :key="valueIndex">
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: false,
    },
  },
};
</script>
