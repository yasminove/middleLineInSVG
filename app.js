const svgWidth = 800;
const svgHeight = 400;

const svg = d3
  .select('#chart')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight)

middleLine = 200;
middleLineWidth = 5;

const line = svg
  .append('line')
  .attr('x1', 0)
  .attr('x2', svgWidth)
  .attr('y1', middleLine)
  .attr('y2', middleLine)
  .attr('stroke', 'black')
  .attr('stroke-width', middleLineWidth)
