// labels along the x-axis
var years = [2003,2004,2005,2005,2007,2008,2009,2010,2011,2012,2013];
// For drawing the lines
var chinook= [5899, 8324, 2619, 6322, 4313, 6571, 701, 2273, 1067, 3179, 2149];
var steelhead = [1706,2440, -99, -99, 1452, 833, 304, 423, 855, 392, 656];

var ctx = document.getElementById("chartOne");
var chartOne = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
        {
          data: chinook,
          label: "Chinook",
          borderColor: "#C91508",
          fill: false
        },
        {
          data: steelhead,
          label: "Steelhead",
          borderColor: "#0A0A82",
          fill: false
        },
      ]
    }
  });






var region = ["Northeast Washington", "Snake River", "Upper Columbia River", "Hood Canal", "Middle Columbia River", "Washington Coast", "Lower Columbia River", "Puget Sound"];
var acres = [30, 312, 408, 647, 1312, 2562, 4040, 5369]

var ctx = document.getElementById("chartTwo");
var chartTwo = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: region,

    datasets: [
      {
        label: "Number of Riparian Acres",
        data: acres,
        backgroundColor: ["#458A8C", "#0D8C0D", "#D40D06", "#D0D615", "#C42DAB", "#412DF7", "#9521D9", "#E38C34"],
        hoverBorderColor: ["white"],
      }
    ]
  },
  options: {
    legend: { display: false },
  }
});
