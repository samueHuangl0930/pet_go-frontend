import images from "../../config/images";
import React, { useState } from "react";
import ButtonComponent from "../../components/button/button";

import {
  Checkbox,
  Col,
  Row,
  Form,
  Input,
  InputNumber,
  Select,
  TextArea,
  Button,
} from "antd";
import "./Rearing-pet.less";

function RearingPetpage() {
  const { TextArea } = Input;

  const onChange3 = (e) => {
    console.log("Change:", e.target.value);
  };

  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const onChange2 = (value) => {
    console.log("changed", value);
  };

  const onChange1 = (checkedValues) => {
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

  return (
    <div id="RearingPetwarp">
      <Row type="flex" justify="center">
        <Col lg={16} md={18} sm={20} xs={22} className="RearingPetwarp">
          <Row type="flex" justify="center">
            <Col md={24} xs={24}>
              <p className="RearingPetTitle">我的養寵經歷</p>
            </Col>

            <Col md={16} sm={20} xs={22}>
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
                    <Row className="ListPetCard" justify="center" align="end">
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
                            <img className="listPetJmimg" src={images.jm} />
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
                                <div className="PetCardLabel1">自家寵物</div>
                              </Col>
                            </Row>
                            <Row type="flex" align="bottom">
                              <Col xl={24} lg={24} md={24} sm={22} xs={22}>
                                <Row align="middle">
                                  <span className="PetCardText">
                                    品種：傑克羅素耿
                                  </span>
                                  <span className="PetCardText">性別：男</span>
                                  <span className="PetCardText">年齡：5</span>

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

                    <Row className="ListPetCard" justify="center" align="end">
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
                            <img className="listPetJmimg" src={images.ex4} />
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
                                <div className="PetCardLabel1">自家寵物</div>
                              </Col>
                            </Row>
                            <Row type="flex" align="bottom">
                              <Col xl={24} lg={24} md={24} sm={22} xs={22}>
                                <Row align="middle">
                                  <span className="PetCardText">
                                    品種：米克斯
                                  </span>
                                  <span className="PetCardText">性別：女</span>
                                  <span className="PetCardText">年齡：4</span>

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
                    <Row className="ListPetCard" justify="center" align="end">
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
                            <img className="listPetJmimg" src={images.ex6} />
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
                                <div className="PetCardLabel2">共養寵物</div>
                              </Col>
                            </Row>
                            <Row type="flex" align="bottom">
                              <Col xl={24} lg={24} md={24} sm={22} xs={22}>
                                <Row align="middle">
                                  <span className="PetCardText">
                                    品種：荷蘭兔
                                  </span>
                                  <span className="PetCardText">性別：女</span>
                                  <span className="PetCardText">年齡：2</span>

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

                    <Row className="ListPetCard" justify="center" align="end">
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
                            <img className="listPetJmimg" src={images.knock} />
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
                                <div className="PetCardLabel3">體驗寵物</div>
                              </Col>
                            </Row>
                            <Row type="flex" align="bottom">
                              <Col xl={24} lg={24} md={24} sm={22} xs={22}>
                                <Row align="middle">
                                  <span className="PetCardText">
                                    品種：米克斯
                                  </span>
                                  <span className="PetCardText">性別：女</span>
                                  <span className="PetCardText">年齡：6</span>

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

                    <Row className="ListPetCard" justify="center" align="end">
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
                            <img className="listPetJmimg" src={images.ex7} />
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
                                <div className="PetCardLabel3">體驗寵物</div>
                              </Col>
                            </Row>
                            <Row type="flex" align="bottom">
                              <Col xl={24} lg={24} md={24} sm={22} xs={22}>
                                <Row align="middle">
                                  <span className="PetCardText">
                                    品種：荷蘭兔
                                  </span>
                                  <span className="PetCardText">性別：男</span>
                                  <span className="PetCardText">年齡：4</span>

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
                  <Col md={24} sm={21} xs={21}>
                    <Row type="flex" justify="center" align="middle">
                      <Col md={10} sm={24} xs={12}>
                        <Form.Item
                          className="RearingPet3Form"
                          wrapperCol={{
                            span: 14,
                          }}
                          label="飼養資歷"
                          name="BreedingSeniorityYear"
                        >
                          <InputNumber
                            min={0}
                            max={50}
                            defaultValue={"4"}
                            onChange={onChange2}
                            placeholder="單位(年)"
                          />{" "}
                          年
                        </Form.Item>
                      </Col>

                      <Col md={10} sm={24} xs={12}>
                        <Form.Item
                          className="RearingPet3Form"
                          wrapperCol={{
                            span: 22,
                          }}
                          label="飼養過寵物數量"
                          name="FeedingQuantity"
                        >
                          <InputNumber
                            min={0}
                            max={100}
                            defaultValue={"3"}
                            onChange={onChange2}
                            placeholder="單位(隻)"
                          />{" "}
                          隻
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={20} sm={21} xs={21} type="flex" justify="center">
                    <Form.Item
                      className="RearingPet3Form"
                      wrapperCol={{
                        span: 14,
                      }}
                      label="飼養過哪些動物"
                      name="WhichPets"
                    >
                      <Input defaultValue={"狗、貓、兔子"} />
                    </Form.Item>
                  </Col>
                  <Col md={20} sm={21} xs={21} type="flex" justify="center">
                    <Form.Item
                      className="RearingPet3Form"
                      wrapperCol={{
                        span: 12,
                      }}
                      label="家中可活動範圍"
                      name="HomeRange"
                    >
                      <Select defaultValue="中等" onChange={handleChange}>
                        <Option value="jack">狹窄</Option>
                        <Option value="lucy">中等</Option>
                        <Option value="disabled">寬敞</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Row
                  md={24}
                  type="flex"
                  justify="space-between"
                  align="middle"
                  className="buttonwarp"
                >
                  <Col span={11}>
                    <a href="/member">
                      <ButtonComponent
                        text="取消"
                        size="large"
                        name="FormCancel"
                      />
                    </a>
                    {/* <Button style={{ height: 30 }} className="FormCancel">取消</Button> */}
                  </Col>
                  <Col span={11}>
                    <a href="/member">
                      <ButtonComponent
                        text="儲存"
                        size="large"
                        name="FormSave"
                      />
                    </a>
                    {/* <Button style={{ height: 30 }} className="FormSave">儲存</Button> */}
                  </Col>
                </Row>
              </Form>
            </Col>

            <Col></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default RearingPetpage;
