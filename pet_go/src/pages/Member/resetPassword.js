import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Checkbox,
  Form,
  Icon,
  Input,
  Space,
  Modal,
} from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import ButtonComponent from "../../components/button/button";
import { AiFillLock } from "react-icons/ai";
import images from "../../config/images";
import axios from "axios";
import "./resetPassword.less";

function Revise() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const [posts, setPosts] = useState([]);
  // fetch_data()
  const config = {
    url: "http://127.0.0.1:8000/api/forget/revise", // 只有此為必需
    method: "patch", // 大小寫皆可
    headers: {
      Accept: "text/html",
      "Content-Type": "application/x-www-form-urlencoded",
      // 'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": document.querySelector('meta[name="csrftoken"]'),
    },

    responseType: "json", // 伺服器回應的數據類型
  };
  try {
    axios(config).then((res) => {
      console.log(res.data.req);
      setPosts(res.data.req);
    }, []);
  } catch (error) {
    throw error;
    // Do  with error
  }
  console.log("posts=>", posts);

  return (
    <div id="login">
      <Row justify="center" align="center" className="container">
        <Col xs={22} md={20} className="login">
          <Row className="bannerBlock">
            <Col xs={0} sm={0} md={10}>
              <div className="imgBlock">
                <img src={images.bg1} alt="bg-1" className="" />
              </div>
            </Col>
            <Col xs={24} sm={24} md={14} className="titleBlock">
              <Row className="a" align="center">
                <Col sm={24} md={14}>
                  <Form
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    // onClick={login}
                    autoComplete="off"
                    className="form"
                  >
                    <h1>更改密碼</h1>
                    <hr></hr>

                    <Form.Item
                      label="現有密碼"
                      name="old"
                      rules={[
                        {
                          required: true,
                          message: "請輸入現有密碼!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="輸入帳號"
                        prefix={<UserOutlined />}
                      />
                    </Form.Item>
                    <Form.Item
                      label="新密碼"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input.Password
                        size="large"
                        placeholder="輸入密碼"
                        prefix={<AiFillLock />}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      label="確認密碼"
                      name="confirm"
                      rules={[
                        {
                          required: true,
                          message: "請輸入現有密碼!",
                        },
                      ]}
                    >
                      <Input.Password
                        size="large"
                        placeholder="輸入密碼"
                        prefix={<AiFillLock />}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      className="loginbtndiv"
                      wrapperCol={{ span: 24 }}
                      // onClick={submit}
                    >
                      <ButtonComponent
                        text="登入"
                        size="large"
                        name="loginbtn"
                        htmlType="submit"
                        type="primary"
                      />
                    </Form.Item>
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{
                        span: 24,
                      }}
                    >
                      <Checkbox>記住我</Checkbox>
                      <div className="link">
                        <a href="/Signup">前往註冊</a>
                        <h3>/</h3>
                        <a href="/forget">忘記密碼</a>
                      </div>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>

              {/* <div className="alertBlock">
                
              </div> */}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Revise;
