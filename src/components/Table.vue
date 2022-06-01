<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Asset Class
          </th>
          <th class="text-right">
            Net %
          </th>
          <th class="text-right">
            Bmark %
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in modelData" :key="item.assetClass">
          <td class="text-left">{{ item.assetClass }}</td>
          <td class="text-right">{{ item.net }}</td>
          <td class="text-right">{{ item.bmark }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
export default {
  props: {
    modelData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
