<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>My Chart</title>
  <script src="https://d3js.org/d3.v6.min.js"></script>
  <script>
    // Data
    const data = <?php echo json_encode($data); ?>;

    // Create SVG element
    const svg = d3.select("#chart")
                .append("svg")
                .attr("width", 400)
                .attr("height", 200);

    // Create bars
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 50)
      .attr("y", (d) => 200 - d * 5)
      .attr("width", 40)
      .attr("height", (d) => d * 5)
      .attr("fill", "steelblue");
  </script>
</head>
<body>
  <div id="chart"></div>
</body>
</html>
