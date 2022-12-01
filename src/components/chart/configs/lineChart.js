const lineChart = {
  series: [
    {
      name: "ExhiByte",
      data: [54, 32, 35, 67, 86, 48, 67, 54, 86, 12, 60, 45],
      offsetY: 0,
    },
    {
      name: "Neelam",
      data: [30, 50, 40, 30, 20, 50, 80, 70, 90, 85, 50, 40],
      offsetY: 0,
    },
    {
      name: "Dipti",
      data: [35, 40, 30, 22, 50, 25, 40, 67, 86, 78, 23, 50],
      offsetY: 0,
    },
    {
      name: "Ruta",
      data: [85, 74, 67, 86, 78, 69, 16, 28, 36, 48, 64, 69],
      offsetY: 0,
    },
  ],

  options: {
    chart: {
      width: "100%",
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: ["#8c8c8c"],
        },
      },
    },

    xaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: [
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
            "#8c8c8c",
          ],
        },
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Des",
      ],
    },

    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  },
};

export default lineChart;