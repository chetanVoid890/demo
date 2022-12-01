import React, { Component } from "react";
import {
  Layout,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
} from "antd";

import { Link } from "react-router-dom";

const { Title } = Typography;
const { Header, Footer, Content } = Layout;
export default class SignUp extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    return (
      <>
        <div className="layout-default ant-layout layout-sign-up">
          <Header>
            <div className="header-brand" style={{ width: "100%", textAlign: 'center' }}>
              <h1 style={{ color: "white" }}>Diary Of Compny</h1>
            </div>
          </Header>

          <Content className="p-0">
            <div className="sign-up-header">
              <div className="content">
                <Title>Sign Up</Title>
                <p className="text-lg">Use these awesome forms to login or create new account in your project for free.</p>
              </div>
            </div>

            <Card
              className="card-signup header-solid h-full ant-card pt-0"
              title={<h5>Register With</h5>}
              bordered="false"
            >
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="row-col"
              >
                <Form.Item
                  name="Name"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input placeholder="email" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input placeholder="Passwoed" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>I agree the{" "}<a href="#pablo" className="font-bold text-dark">Terms and Conditions</a></Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button style={{ width: "100%" }} type="primary" htmlType="submit">SIGN UP</Button>
                </Form.Item>
              </Form>
              <p className="font-semibold text-muted text-center">Already have an account?{" "}<Link to="/sign-in" className="font-bold text-dark">Sign In</Link></p>
            </Card>
          </Content>
          <Footer>
            <p className="copyright">Copyright © 2022 <a href="https://exhibytesolution.com/">ExhiByte.</a> All Rights Reserved.</p>
          </Footer>
        </div>
      </>
    );
  }
}
