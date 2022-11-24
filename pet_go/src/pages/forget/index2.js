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
import "./index.less";

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
    url: "http://127.0.0.1:8000/api/member/reset-password", // 只有此為必需
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
      <Row className="container">
        <Col xl={24} lg={24} md={24} sm={24} xs={24} className="login">
          <Row
            className="bannerBlock1"
            type="flex"
            justify="center"
            align="middle"
          >
            <Col xl={14} md={12} sm={24} xs={24}>
              <div className="imgBlock">
                <div className="imgTop"></div>
                <img src={images.bg1} alt="bg-1" />
              </div>
            </Col>
            <Col xl={10} md={12} sm={16} xs={24} className="titleBlock">
              <Row type="flex" justify="center">
                <Col span={24} className="title">
                  <h1>修改密碼</h1>
                  <hr></hr>
                </Col>

                <Col sm={24} md={14} className="formWarp">
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
                    <Row className="FormContent">
                      <Col span={24}>
                        <Form.Item
                          wrapperCol={{ span: 24 }}
                          name="new"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input.Password
                            size="large"
                            placeholder="新密碼"
                            prefix={<AiFillLock />}
                            iconRender={(visible) =>
                              visible ? (
                                <EyeTwoTone />
                              ) : (
                                <EyeInvisibleOutlined />
                              )
                            }
                          />
                        </Form.Item>
                      </Col>

                      <Col span={24}>
                        <Form.Item
                          wrapperCol={{ span: 24 }}
                          name="new"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input.Password
                            size="large"
                            placeholder="確認新密碼"
                            prefix={<AiFillLock />}
                            iconRender={(visible) =>
                              visible ? (
                                <EyeTwoTone />
                              ) : (
                                <EyeInvisibleOutlined />
                              )
                            }
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row className="FormBottom">
                      <Form.Item
                        className="loginbtndiv"
                        wrapperCol={{ span: 24 }}

                        // onClick={submit}
                      >
                        <ButtonComponent
                          text="確定"
                          size="large"
                          name="loginbtn"
                          htmlType="submit"
                          type="primary"
                        />
                      </Form.Item>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Revise;
