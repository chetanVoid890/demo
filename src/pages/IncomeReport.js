import {
  Card,
  Col,
  Row,
  Typography,
} from "antd";
import colors from "../assets/styles/Colors";
import LineChart from "../components/chart/LineChart";

const Mode1ReportData = [
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
];

const Mode2ReportData = [
  {
    name: "ExhiByte",
    data: [10, 22, 45, 65, 15, 85, 65, 48, 86, 12, 82, 65],
    offsetY: 0,
  },
  {
    name: "Neelam",
    data: [25, 64, 34, 25, 15, 20, 30, 41, 31, 61, 2, 40],
    offsetY: 0,
  },
  {
    name: "Dipti",
    data: [41, 12, 32, 12, 52, 14, 25, 36, 20, 10, 30, 50],
    offsetY: 0,
  },
  {
    name: "Ruta",
    data: [65, 45, 24, 35, 16, 85, 74, 76, 67, 68, 74, 30],
    offsetY: 0,
  },
];

const TotleReportData = [
  {
    name: "ExhiByte",
    data: [56, 23, 34, 98, 23, 67, 9, 89, 76, 45, 23, 12],
    offsetY: 0,
  },
  {
    name: "Neelam",
    data: [25, 64, 34, 25, 15, 20, 30, 41, 31, 61, 2, 40],
    offsetY: 0,
  },
  {
    name: "Dipti",
    data: [41, 12, 32, 12, 52, 14, 25, 36, 20, 10, 30, 50],
    offsetY: 0,
  },
  {
    name: "Ruta",
    data: [65, 45, 24, 35, 16, 85, 74, 76, 67, 68, 74, 30],
    offsetY: 0,
  },
];

function IncomeReport() {
  const { Title } = Typography;
  const Rupee = [
    <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="40 -1 170 250">
      <path fill="#000" d="M153 23h41l15-23H55L40 23h26c27 0 52 2 62 25H55L40 71h91v1c0 17-14 43-60 43H48v22l90 113h41L85 133c39-2 75-24 80-62h29l15-23h-45c-1-9-5-18-11-25z" />
    </svg>,
  ];

  const totalIncomeText = [
    {
      today: "Income (Mode 1)",
      title: "₹5,000",
      persent: "+30%",
      icon: Rupee,
      bnb: "bnb2",
      prColor: colors.green,
      color: colors.green2,
    },
    {
      today: "Income (Mode 2)",
      title: "₹60,000",
      persent: "-10%",
      icon: Rupee,
      bnb: "bnb2",
      prColor: colors.red,
      color: colors.red2,
    },
    {
      today: "Total Income (Mode 1 + Mode 2)",
      title: "₹65,000",
      persent: "+5%",
      icon: Rupee,
      bnb: "bnb2",
      prColor: colors.green,
      color: colors.green2,
    },
  ];

  const mode1People = [
    {
      Title: "₹3,320",
      user: "ExhiByte",
    },
    {
      Title: "₹1,506",
      user: "Neelam",
    },
    {
      Title: "₹11,500",
      user: "Dipti",
    },
    {
      Title: "₹5,025",
      user: "Ruta",
    },
  ];

  const mode2People = [
    {
      Title: "₹520",
      user: "ExhiByte",
    },
    {
      Title: "₹5676",
      user: "Neelam",
    },
    {
      Title: "₹1500",
      user: "Dipti",
    },
    {
      Title: "₹5425",
      user: "Ruta",
    },
  ];

  const TotleIncomePeople = [
    {
      Title: "₹654",
      user: "ExhiByte",
    },
    {
      Title: "₹9874",
      user: "Neelam",
    },
    {
      Title: "₹3215",
      user: "Dipti",
    },
    {
      Title: "₹6542",
      user: "Ruta",
    },
  ];

  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {totalIncomeText.map((c, index) => (
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

          {/* Mode 1 Report */}
          <Col xs={24} xxl={12} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart title={"Income (Mode 1)"} subTitle={<>Than Last Month <span style={{ color: colors.green }}>+30%</span></>} series={Mode1ReportData} columnName={["ExhiByte", "Neelam", "Ruta", "Dipti"]} />
              <div className="chart-vistior">
                <Row gutter={[24, 30]}>
                  {mode1People.map((v, index) => (
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

          {/* Mode 2 Report */}
          <Col xs={24} xxl={12} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart title={"Income (Mode 2)"} subTitle={<>Than Last Month <span style={{ color: colors.red }}>-10%</span></>} series={Mode2ReportData} columnName={["ExhiByte", "Neelam", "Ruta", "Dipti"]} />
              <div className="chart-vistior">
                <Row gutter={[24, 30]}>
                  {mode2People.map((v, index) => (
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

          {/* Totle Income report (Mode 1 + Mode 2) */}
          <Col xs={24} xxl={12} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart title={"Totle Income (Mode 1 + Mode 2)"} subTitle={<>Than Last Month <span style={{ color: colors.green }}>+5%</span></>} series={TotleReportData} columnName={["ExhiByte", "Neelam", "Ruta", "Dipti"]} />
              <div className="chart-vistior">
                <Row gutter={[24, 30]}>
                  {TotleIncomePeople.map((v, index) => (
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

export default IncomeReport;