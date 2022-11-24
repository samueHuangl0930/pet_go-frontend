import React, { useEffect, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ButtonComponent from "../../components/button/button";
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
import { AiFillLock } from "react-icons/ai";
import images from "../../config/images";
import axios from "axios";
import "./index.less";

function Forget(props) {
  // const { confirm } = Modal;
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // const showDeleteConfirm = () => {
  //   confirm({
  //     title: 'Are you sure delete this task?',
  //     icon: <ExclamationCircleOutlined />,
  //     content: 'Some descriptions',
  //     okText: 'Yes',
  //     okType: 'danger',
  //     cancelText: 'No',

  //     onOk() {
  //       console.log('OK');
  //     },

  //     onCancel() {
  //       console.log('Cancel');
  //     },
  //   });
  // };
  //  const[posts,setPosts]=useState([])
  //   React.useEffect(() => {
  //     // fetch_data()

  //     const config = {
  //       url: 'http://127.0.0.1:8000/forgot-password',  // 只有此為必需
  //       method: 'post', // 大小寫皆可
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin':'*',
  //         'Access-Control-Allow-Headers':'*',
  //         'X-Requested-With':'XMLHttpRequest',
  //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  //       },
  //       data: {
  //           email: "bruce@gmail.com",
  //           password: "vul t/6u.4"
  //       },
  //       responseType: 'json', // 伺服器回應的數據類型
  //     }
  //     try {
  //       axios(config)
  //       .then(res =>{
  //         console.log(res.data.req)
  //         setPosts(res.data.req)
  //       },[]);
  //     }
  //     catch (error) {
  //       throw error;
  //       // Do  with error
  //     }
  //   },[]);
  //   console.log('posts=>',posts);

  return (
    <div id="forget">
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
                  <h1>忘記密碼</h1>
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
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input
                            size="large"
                            placeholder="輸入電子郵件"
                            prefix={<UserOutlined />}
                          />
                        </Form.Item>
                      </Col>

                      <Col span={16}>
                        <Form.Item
                          wrapperCol={{ span: 24 }}
                          className="verify"
                          name="verify"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input size="large" placeholder="輸入驗證碼" />
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          wrapperCol={{ span: 24 }}
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <ButtonComponent
                            text="傳送驗證碼"
                            size="large"
                            name="verifybtn"
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

export default Forget;
