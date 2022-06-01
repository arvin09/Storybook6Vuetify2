import SimpleTable from '@/components/Table.vue';

export default {
  title: 'Morningstar/SimpleTable',
  component: SimpleTable,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SimpleTable },
  template: '<simple-table :modelData="model"/>',
});

export const Sample = Template.bind({});
Sample.args = {
  model: [
    {
      assetClass: 'US Stocks',
      net: 74.20,
      bmark: 98.83,
    },
    {
      assetClass: 'Non US Stocks',
      net: 11.97,
      bmark: 1.17,
    },
    {
      assetClass: 'Bonds',
      net: 11.18,
      bmark: 0.00,
    },
    {
      assetClass: 'Cash',
      net: 0.46,
      bmark: 0.00,
    },
    {
      assetClass: 'Other',
      net: 2.19,
      bmark: 0.00,
    },
    {
      assetClass: 'Not Classified',
      net: 0.00,
      bmark: 0.00,
    },
  ],
};
