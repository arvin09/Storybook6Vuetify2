import AssetAllocation from '@/components/AssetAllocation.vue';

export default {
  title: 'Morningstar/AssetAllocation',
  component: AssetAllocation,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AssetAllocation },
  template: "<asset-allocation :modelData='modelData' :colors='colors'/>",
});

export const Sample = Template.bind({});
Sample.args = {
  modelData: [
    {
      assetClass: 'US Stocks ',
      net: 74.2,
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
      bmark: 0.0,
    },
    {
      assetClass: 'Cash',
      net: 0.46,
      bmark: 0.0,
    },
    {
      assetClass: 'Other',
      net: 2.19,
      bmark: 0.0,
    },
    {
      assetClass: 'Not Classified',
      net: 0.0,
      bmark: 0.0,
    },
  ],
  colors: ['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c', '#a41b1c'],
};
