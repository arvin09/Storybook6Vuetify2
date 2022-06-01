<template>
  <svg :width="width" :height="height"></svg>
</template>

<script>
import * as d3 from 'd3';

export default {
  props: {
    data: {
      type: Array,
      default: () => [2, 4, 8, 10],
    },
    colors: {
      type: Array,
      default: () => [
        '#4daf4a',
        '#377eb8',
        '#ff7f00',
        '#984ea3',
        '#e41a1c',
        '#a41b1c',
      ],
    },
  },
  data: () => ({
    width: 200,
    height: 200,
  }),
  mounted() {
    this.drawChart(this.data);
  },
  watch: {
    data(newData) {
      this.drawChart(newData);
    },
  },
  methods: {
    drawChart(data) {
      const svg = d3.select('svg');
      //   this.width = svg.attr("width"),
      //   this.height = svg.attr("height"),
      const radius = Math.min(this.width, this.height) / 2;
      const g = svg
        .append('g')
        .attr(
          'transform',
          `translate(${this.width / 2},${this.height / 2})`,
        );

      const color = d3.scaleOrdinal(this.colors);

      // Generate the pie
      const pie = d3.pie();

      // Generate the arcs
      const arc = d3
        .arc()
        .innerRadius(40)
        .outerRadius(radius);

      // Generate groups
      const arcs = g
        .selectAll('arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');

      // Draw arc paths
      arcs
        .append('path')
        .attr('fill', (d, i) => color(i))
        .attr('d', arc);
    },
  },
};
</script>
