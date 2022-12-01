import {
  Card,
  Col,
  Row,
  Typography,
} from "antd";

import EChart from "../components/chart/EChart";
import colors from "../assets/styles/Colors";

const ExpenseChartData = [
  {
    name: "Expense",
    data: [175, 200, 250],
    color: "rgb(240, 165, 0)",
  },
];
const IncomeChartData = [
  {
    name: "Expense",
    data: [154, 168, 162],
    color: "rgb(240, 165, 0)",
  },
];

function Home() {
  const { Title } = Typography;
  const Rupee = [
    <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="40 -1 170 250">
      <path fill="#000" d="M153 23h41l15-23H55L40 23h26c27 0 52 2 62 25H55L40 71h91v1c0 17-14 43-60 43H48v22l90 113h41L85 133c39-2 75-24 80-62h29l15-23h-45c-1-9-5-18-11-25z" />
    </svg>,
  ];
  const count = [
    {
      today: "Month Expense",
      title: "₹15,000",
      persent: "+5%",
      icon: Rupee,
      bnb: "bnb2",
      prColor: colors.green,
      color: colors.green2,
    },
    {
      today: "Month Income",
      title: "₹3,200",
      persent: "-5%",
      icon: Rupee,
      prColor: colors.red,
      color: colors.red2,
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
          <Col xs={24} lg={12} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <EChart title={"Monthly Expense Report"} series={ExpenseChartData} categories={["Jan", "Feb", "Mar"]} chartClass={'box-shadow-none'} />
            </Card>
          </Col>
          <Col xs={24} lg={12} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <EChart title={"Monthly Income Report"} series={IncomeChartData} categories={["Jan", "Feb", "Mar"]} chartClass={'box-shadow-none'} />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
