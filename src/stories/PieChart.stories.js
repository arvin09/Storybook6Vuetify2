import PieChart from '@/components/PieChart.vue';

export default {
  title: 'Morningstar/PieChart',
  component: PieChart,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PieChart },
  template: '<pie-chart :data="dataModel" :colors="chartColors"/>',
});

export const Sample = Template.bind({});
Sample.args = {
  dataModel: [10, 20, 30],
  chartColors: ['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c'],
};
