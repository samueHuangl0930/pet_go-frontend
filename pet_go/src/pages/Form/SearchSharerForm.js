import images from "../../config/images";
import ButtonComponent from "../../components/button/button";
import React, { useState } from "react";
import {
  Col,
  Row,
  Button,
  Form,
  Input,
  Radio,
  DatePicker,
  message,
  Upload,
  TextArea,
  Modal,
  Checkbox,
  Collapse,
  InputNumber,
  Select,
} from "antd";

import "./SearchSharerForm.less";

function SearchRequestFormPage() {
  const onChange2 = (value) => {
    console.log("changed", value);
  };

  const onChange3 = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const plainOptions = [
    "住處允許養寵",
    "有照顧寵物的時間",
    "有養寵經濟基礎",
    "願意陪伴寵物",
    "有責任感及耐心",
    "同居者同意且支持",
    "住處穩定",
  ];
  const options = [
    {
      label: "住處穩定",
      value: "住處穩定",
    },
    {
      label: "住處允許養寵",
      value: "住處允許養寵",
    },

    {
      label: "願意陪伴寵物",
      value: "願意陪伴寵物",
    },
    {
      label: "有責任感及耐心",
      value: "有責任感及耐心",
    },
    {
      label: "有養寵經濟基礎",
      value: "有養寵經濟基礎",
    },
    {
      label: "有照顧寵物的時間",
      value: "有照顧寵物的時間",
    },
    {
      label: "同居者同意且支持",
      value: "同居者同意且支持",
    },
  ];
  const { Panel } = Collapse;

  const onChange1 = (key) => {
    console.log(key);
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const { TextArea } = Input;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="SharerForm">
      <Row type="flex" justify="center">
        <Col
          xl={16}
          lg={16}
          md={18}
          sm={22}
          xs={24}
          className="RequestFormwarp"
        >
          <Row type="flex" justify="center">
            <Col span={24}>
              <p className="SharerFormTitle">請求共養</p>
            </Col>

            <Col xl={16} lg={18} md={20} xs={22}>
              <Form>
                <Row type="flex" justify="center">
                  <Col lg={24} md={24} sm={24} xs={24}>
                    <p className="formsubtitle">基本資料</p>
                  </Col>

                  <Col md={22} sm={22} xs={22}>
                    <Row className="formContent">
                      <Col
                        xl={24}
                        lg={24}
                        md={24}
                        sm={24}
                        xs={24}
                        className="formContentText"
                      >
                        姓名：黃婷鈺
                      </Col>
                      <Col
                        xxl={3}
                        xl={4}
                        lg={5}
                        md={5}
                        sm={5}
                        xs={4}
                        className="formContentText"
                      >
                        性別：女
                      </Col>
                      <Col
                        xxl={3}
                        xl={4}
                        lg={5}
                        md={5}
                        sm={5}
                        xs={4}
                        className="formContentText"
                      >
                        年齡：19
                      </Col>
                      <Col
                        xxl={6}
                        xl={8}
                        lg={10}
                        md={10}
                        sm={10}
                        xs={10}
                        className="formContentText"
                      >
                        地區：台中市大里區
                      </Col>
                    </Row>

                    <Form.Item
                      className="formContentTextArea"
                      name="SelfIntroduction"
                      label="自我介紹"
                    >
                      <TextArea
                        rows={3}
                        defaultValue="大家好我是白白，我非常喜愛寵物，自己也養過許多寵物希望可以認識不同狗狗"
                      />
                    </Form.Item>

                    <div className="LineWrap">
                      <p className="LineLable">第三方聯絡資訊：</p>
                      <img className="formLineImg" src={images.line} />
                      <Form.Item
                        name="line"
                        className="lineFormItem"
                        wrapperCol={{
                          span: 22,
                        }}
                      >
                        <Input placeholder="輸入ID" />
                        {/* defaultValue="a52195219a" */}
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <hr className="formHr"></hr>
                    <p className="formsubtitle">養寵經歷</p>
                  </Col>

                  <Col md={22} className="articleMoreWarp">
                    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                      <Panel header="點擊查看更多經歷" key="1">
                        <Form>
                          <h2 className="RearingPetSubheader">基本寵物資訊</h2>
                          <Form.Item name="Basic-Pet-Information">
                            <Checkbox.Group
                              style={{
                                width: "100%",
                              }}
                              onChange={onChange}
                            >
                              <Row className="RearingPetCheckboxWarp">
                                <Checkbox.Group
                                  style={{
                                    width: "100%",
                                    padding: "0 5%",
                                  }}
                                  options={plainOptions}
                                  defaultValue={[
                                    "有養寵經濟基礎",
                                    "住處允許養寵",
                                    "有責任感及耐心",
                                    "願意陪伴寵物",
                                  ]}
                                  onChange={onChange1}
                                />
                              </Row>
                            </Checkbox.Group>
                          </Form.Item>
                          <hr className="RearingPetHr"></hr>
                          <Row>
                            <h2 className="RearingPetSubheader">養寵經歷</h2>
                            <Col md={24}>
                              <Row
                                className="ListPetCard"
                                justify="center"
                                align="end"
                              >
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                  <Row type="flex" align="strat">
                                    <Col
                                      xxl={5}
                                      xl={6}
                                      lg={8}
                                      md={10}
                                      sm={10}
                                      xs={10}
                                      className="listPetJmimgWarp"
                                    >
                                      <img
                                        className="listPetJmimg"
                                        src={images.jm}
                                      />
                                    </Col>
                                    <Col
                                      xxl={16}
                                      xl={16}
                                      lg={16}
                                      md={14}
                                      sm={14}
                                      xs={14}
                                      className="PetCardCenter"
                                    >
                                      <Row type="flex" align="middle">
                                        <Col>
                                          <p className="PetCardName">吉米</p>
                                        </Col>
                                        <Col>
                                          <div className="PetCardLabel1">
                                            自家寵物
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row type="flex" align="bottom">
                                        <Col
                                          xl={24}
                                          lg={24}
                                          md={24}
                                          sm={22}
                                          xs={22}
                                        >
                                          <Row align="middle">
                                            <span className="PetCardText">
                                              品種：傑克羅素耿
                                            </span>
                                            <span className="PetCardText">
                                              性別：男
                                            </span>
                                            <span className="PetCardText">
                                              年齡：5
                                            </span>

                                            <span className="PetCardText">
                                              飼養日期：2016/06/12 ～
                                            </span>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>

                              <Row
                                className="ListPetCard"
                                justify="center"
                                align="end"
                              >
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                  <Row type="flex" align="strat">
                                    <Col
                                      xxl={5}
                                      xl={6}
                                      lg={8}
                                      md={10}
                                      sm={10}
                                      xs={10}
                                      className="listPetJmimgWarp"
                                    >
                                      <img
                                        className="listPetJmimg"
                                        src={images.ex4}
                                      />
                                    </Col>
                                    <Col
                                      xxl={16}
                                      xl={16}
                                      lg={16}
                                      md={14}
                                      sm={14}
                                      xs={14}
                                      className="PetCardCenter"
                                    >
                                      <Row type="flex" align="middle">
                                        <Col>
                                          <p className="PetCardName">餅乾</p>
                                        </Col>
                                        <Col>
                                          <div className="PetCardLabel1">
                                            自家寵物
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row type="flex" align="bottom">
                                        <Col
                                          xl={24}
                                          lg={24}
                                          md={24}
                                          sm={22}
                                          xs={22}
                                        >
                                          <Row align="middle">
                                            <span className="PetCardText">
                                              品種：米克斯
                                            </span>
                                            <span className="PetCardText">
                                              性別：女
                                            </span>
                                            <span className="PetCardText">
                                              年齡：4
                                            </span>

                                            <span className="PetCardText">
                                              飼養日期：2018-01-09 ～
                                            </span>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                              <Row
                                className="ListPetCard"
                                justify="center"
                                align="end"
                              >
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                  <Row type="flex" align="strat">
                                    <Col
                                      xxl={5}
                                      xl={6}
                                      lg={8}
                                      md={10}
                                      sm={10}
                                      xs={10}
                                      className="listPetJmimgWarp"
                                    >
                                      <img
                                        className="listPetJmimg"
                                        src={images.ex6}
                                      />
                                    </Col>
                                    <Col
                                      xxl={16}
                                      xl={16}
                                      lg={16}
                                      md={14}
                                      sm={14}
                                      xs={14}
                                      className="PetCardCenter"
                                    >
                                      <Row type="flex" align="middle">
                                        <Col>
                                          <p className="PetCardName">圓圓</p>
                                        </Col>
                                        <Col>
                                          <div className="PetCardLabel2">
                                            共養寵物
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row type="flex" align="bottom">
                                        <Col
                                          xl={24}
                                          lg={24}
                                          md={24}
                                          sm={22}
                                          xs={22}
                                        >
                                          <Row align="middle">
                                            <span className="PetCardText">
                                              品種：荷蘭兔
                                            </span>
                                            <span className="PetCardText">
                                              性別：女
                                            </span>
                                            <span className="PetCardText">
                                              年齡：2
                                            </span>

                                            <span className="PetCardText">
                                              體驗日期：2022/06/12
                                            </span>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>

                              <Row
                                className="ListPetCard"
                                justify="center"
                                align="end"
                              >
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                  <Row type="flex" align="strat">
                                    <Col
                                      xxl={5}
                                      xl={6}
                                      lg={8}
                                      md={10}
                                      sm={10}
                                      xs={10}
                                      className="listPetJmimgWarp"
                                    >
                                      <img
                                        className="listPetJmimg"
                                        src={images.knock}
                                      />
                                    </Col>
                                    <Col
                                      xxl={16}
                                      xl={16}
                                      lg={16}
                                      md={14}
                                      sm={14}
                                      xs={14}
                                      className="PetCardCenter"
                                    >
                                      <Row type="flex" align="middle">
                                        <Col>
                                          <p className="PetCardName">芋頭</p>
                                        </Col>
                                        <Col>
                                          <div className="PetCardLabel3">
                                            體驗寵物
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row type="flex" align="bottom">
                                        <Col
                                          xl={24}
                                          lg={24}
                                          md={24}
                                          sm={22}
                                          xs={22}
                                        >
                                          <Row align="middle">
                                            <span className="PetCardText">
                                              品種：米克斯
                                            </span>
                                            <span className="PetCardText">
                                              性別：女
                                            </span>
                                            <span className="PetCardText">
                                              年齡：6
                                            </span>

                                            <span className="PetCardText">
                                              體驗日期：2020-12-15 ～ 2020-12-18
                                            </span>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>

                              <Row
                                className="ListPetCard"
                                justify="center"
                                align="end"
                              >
                                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                                  <Row type="flex" align="strat">
                                    <Col
                                      xxl={5}
                                      xl={6}
                                      lg={8}
                                      md={10}
                                      sm={10}
                                      xs={10}
                                      className="listPetJmimgWarp"
                                    >
                                      <img
                                        className="listPetJmimg"
                                        src={images.ex7}
                                      />
                                    </Col>
                                    <Col
                                      xxl={16}
                                      xl={16}
                                      lg={16}
                                      md={14}
                                      sm={14}
                                      xs={14}
                                      className="PetCardCenter"
                                    >
                                      <Row type="flex" align="middle">
                                        <Col>
                                          <p className="PetCardName">貝寶</p>
                                        </Col>
                                        <Col>
                                          <div className="PetCardLabel3">
                                            體驗寵物
                                          </div>
                                        </Col>
                                      </Row>
                                      <Row type="flex" align="bottom">
                                        <Col
                                          xl={24}
                                          lg={24}
                                          md={24}
                                          sm={22}
                                          xs={22}
                                        >
                                          <Row align="middle">
                                            <span className="PetCardText">
                                              品種：荷蘭兔
                                            </span>
                                            <span className="PetCardText">
                                              性別：男
                                            </span>
                                            <span className="PetCardText">
                                              年齡：4
                                            </span>

                                            <span className="PetCardText">
                                              體驗日期：2022-01-17 ～ 2022-01-20
                                            </span>
                                          </Row>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>

                            <hr className="RearingPetHr"></hr>
                          </Row>

                          <Row
                            className="RearingPet3"
                            type="flex"
                            justify="center"
                            align="middle"
                          >
                            <Col
                              md={10}
                              sm={21}
                              xs={21}
                              type="flex"
                              justify="center"
                            >
                              <h3>飼養資歷:4年</h3>
                            </Col>

                            <Col
                              md={10}
                              sm={21}
                              xs={21}
                              type="flex"
                              justify="center"
                            >
                              <h3>飼養過寵物數量:3隻</h3>
                            </Col>

                            <Col
                              md={20}
                              sm={21}
                              xs={21}
                              type="flex"
                              justify="center"
                            >
                              <h3>飼養過哪些動物:狗、貓、兔子</h3>
                            </Col>
                            <Col
                              md={20}
                              sm={21}
                              xs={21}
                              type="flex"
                              justify="center"
                            >
                              <h3>家中可活動範圍:中等</h3>
                            </Col>
                          </Row>
                        </Form>
                      </Panel>
                    </Collapse>
                  </Col>

                  <Col span={24}>
                    <hr className="formHr"></hr>
                    <p className="formsubtitle">申請要共養人的原因</p>
                  </Col>
                  <Col span={22}>
                    <Form.Item
                      name="ReasonApplication"
                      className="formContentTextArea"
                    >
                      <TextArea
                        rows={3}
                        defaultValue="喜愛寵物但平日都可以幫忙帶"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col lg={6} md={8} sm={10} xs={10} className="formBtnWarp">
                    <a href="/sent-nequest">
                      <ButtonComponent
                        text="送出"
                        size="large"
                        name="gotoexperence "
                      />
                    </a>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SearchRequestFormPage;
