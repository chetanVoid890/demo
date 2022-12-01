
import React from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {
        chart: {
          width: "100%",
          type: "pie",
        },
        labels: [
          "ExhiByte",
          "Neelam",
          "Dipti",
          "Ruta",
        ],
        theme: {
          monochrome: {
            enabled: true
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="pie"
        width="100%"
        height="100%"
      />
    );
  }
}

export default PieChart;