import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import eChart from "./configs/index_income_eChart";

function EChart() {
  const { Title } = Typography;

  return (
    <>
      <div>
        <Title level={4}>Monthly Income Report</Title>
      </div>
      <div id="chart">
        <ReactApexChart
          className="bar-chart box-shadow-none"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={220}
        />
      </div>
    </>
  );
}

export default EChart;
