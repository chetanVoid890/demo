import {
  Card,
  Col,
  Row,
  Typography,
} from "antd";

import LineChart from "../components/chart/LineChart";
import colors from "../assets/styles/Colors";

const ExpenseChartData = [
  {
    name: "ExhiByte",
    data: [30, 32, 15, 35, 25, 45, 55, 30, 45, 75, 12, 65],
    offsetY: 0,
  },
  {
    name: "Neelam",
    data: [75, 58, 65, 45, 85, 25, 35, 15, 95, 75, 66, 44],
    offsetY: 0,
  },
  {
    name: "Dipti",
    data: [58, 55, 33, 22, 88, 11, 44, 77, 66, 78, 33, 55],
    offsetY: 0,
  },
  {
    name: "Ruta",
    data: [65, 45, 24, 35, 16, 85, 74, 76, 67, 68, 74, 30],
    offsetY: 0,
  },
];

function ExpenseReport() {
  const { Title } = Typography;
  const Rupee = [
    <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="40 -1 170 250">
      <path fill="#000" d="M153 23h41l15-23H55L40 23h26c27 0 52 2 62 25H55L40 71h91v1c0 17-14 43-60 43H48v22l90 113h41L85 133c39-2 75-24 80-62h29l15-23h-45c-1-9-5-18-11-25z" />
    </svg>,
  ];

  const count = [
    {
      today: "Total Expense",
      title: "₹53,000",
      persent: "+30%",
      icon: Rupee,
      bnb: "bnb2",
      prColor: colors.green,
      color: colors.green2,
    },
  ];

  const items = [
    {
      Title: "₹1,000",
      user: "ExhiByte",
    },
    {
      Title: "₹2,056",
      user: "Neelam",
    },
    {
      Title: "₹4,500",
      user: "Dipti",
    },
    {
      Title: "₹5,025",
      user: "Ruta",
    },
  ];

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col key={index} xs={24} xl={8} className="mb-24" >
              <Card bordered={false} className="criclebox" style={{ background: c.color }}>
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small style={{ color: c.prColor }}>{c.persent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div className="icon-box">{c.icon}</div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[24, 0]}>
          <Col xs={24} xxl={12} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
            <LineChart title={"Yearly Expenses"} subTitle={<>Than Last Month <span style={{color: colors.green}}>+20%</span></>} series={ExpenseChartData} columnName={["ExhiByte", "Neelam", "Ruta", "Dipti"]} />
              <div className="chart-vistior">
                <Row gutter={[24, 30]}>
                  {items.map((v, index) => (
                    <Col xs={12} lg={6} className="text-center" key={index}>
                      <div className="chart-visitor-count">
                        <Title level={4}>{v.Title}</Title>
                        <span>{v.user}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ExpenseReport;