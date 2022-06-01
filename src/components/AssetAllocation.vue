<template>
  <div>
    <v-row>
      <v-col cols="12">
        <span class="title">Asset Allocation</span>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" class="donut">
        <PieChart :data="allocation" :colors="colors"></PieChart>
      </v-col>
      <v-col cols="12" sm="6">
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
              <tr v-for="(item, index) in modelData" :key="item.assetClass">
                <td class="text-left">
                  <span
                    class="asset-icon"
                    :style="{ 'border-color': colors[index] }"
                  ></span>
                  <span>{{ item.assetClass }}</span>
                </td>
                <td class="text-right">{{ item.net }}</td>
                <td class="text-right">{{ item.bmark }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PieChart from '@/components/PieChart.vue';

export default {
  components: {
    PieChart,
  },
  props: {
    modelData: {
      type: Array,
      default: () => [],
    },
    colors: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    allocation() {
      const netCollection = [];
      this.modelData.forEach((item) => {
        console.log(item.net);
        netCollection.push(item.net);
      });
      console.log(netCollection);
      return netCollection;
    },
  },
};
</script>

<style lang="css" scoped>
.asset-icon {
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 100%;
  border: solid 3px;
}
.donut {
  text-align: center;
  margin: auto;
}
.title {
  font-size: 18px;
  font-weight: 500;
}
</style>
