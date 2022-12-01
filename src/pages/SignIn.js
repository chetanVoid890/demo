import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  notification
} from "antd";
import { useAuth } from '../contexts/AuthContexts'
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../redux/type/type";
import signinbg from "../assets/images/img-signin.jpg";
// function onChange(checked) {
//   console.log(`switch to ${checked}`);
// }
const { Title } = Typography;
const { Header, Footer, Content } = Layout;
function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [issubmited, setIssubmited] = useState(false)
  const { login } = useAuth()
  const history = useHistory()
  const dispatch = useDispatch();
  const onFinish = (values) => {
    if (!email || !password) {
      notification.open({
        description: 'Credentials not valid.',
      });
    }
    setIssubmited(true)
    login(email, password)
      .then((response) => {
        console.log(response)
        dispatch({ type: LOGIN_SUCCESS, user:response.user })
        history.push('/dashboard')
      })
      .catch((error) => {
        notification.open({
          description:error.message,
        });
        // openNotificationWithIcon('error')
      })
      .finally(() => setIssubmited(false))
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Layout className="layout-default layout-signin">
        <Header>
          <div className="header-brand" style={{width: "100%", textAlign:'center'}}>
            <h1>Diary Of Compny</h1>
          </div>
        </Header>
        <Content className="signin">
          <Row gutter={[24, 0]} display='flex' justify="space-around" style={{alignItems:'center'}}>
            <Col xs={{ span: 24, offset: 0 }} md={{ span: 12 }} lg={{ span: 8, offset: 2 }}>
              <Title className="mb-15">Sign In</Title>
              <Title className="font-regular text-muted" level={5}>Enter your email and password to sign in</Title>
              <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout="vertical" className="row-col">
                <Form.Item className="username" label="Email" name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Item>

                <Form.Item className="username" label="Password" name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Item>
                <Form.Item>
                  <Button isLoading={issubmited} type="primary" htmlType="submit" style={{ width: "100%" }} >SIGN IN</Button>
                </Form.Item>
                <p className="font-semibold text-muted">Don't have an account? <Link to="/sign-up" className="text-dark font-bold">Sign Up</Link></p>
              </Form>
            </Col>
            <Col className="sign-img" style={{ padding: 12 }} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <img src={signinbg} alt="Sign Images" />
            </Col>
          </Row>
        </Content>
        <Footer>
          <p className="copyright">Copyright © 2022 <a href="https://exhibytesolution.com/">ExhiByte.</a> All Rights Reserved.</p>
        </Footer>
      </Layout>
    </>
  );
}

export default SignIn;
