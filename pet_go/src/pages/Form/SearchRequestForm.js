import images from "../../config/images";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import ButtonComponent from "../../components/button/button";

import React, { useState } from "react";
import {
  Select,
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
  Space,
} from "antd";

import "./SearchRequestForm.less";

function SearchRequestFormPage() {
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

  const { TextArea } = Input;

  return (
    <div id="RequestForm">
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
              <p className="RequestFormTitle">尋找共養者</p>
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
                    <p className="formsubtitle">寵物資訊</p>
                  </Col>
                  <Col md={22}>
                    <Radio.Group
                      className="petListSelect"
                      defaultValue="a"
                      buttonStyle="solid"
                    >
                      <Radio.Button className="ListPetCardRadio" value="b">
                        <Row
                          className="ListPetCardForm"
                          type="flex"
                          justify="center"
                          align="middle"
                        >
                          <Col md={6} sm={8} xs={10}>
                            <img className="RearingPetJmimg" src={images.jm} />
                          </Col>
                          <Col md={13} sm={11} xs={14}>
                            <Row type="flex" align="middle">
                              <Col>
                                <p className="PetCardName">吉米</p>
                              </Col>
                            </Row>
                            <Row type="flex" align="middle">
                              <Col
                                xl={22}
                                md={24}
                                sm={24}
                                xs={24}
                                className="PetCardText"
                              >
                                品種：傑克羅素耿
                              </Col>
                              <Col
                                xl={6}
                                md={8}
                                sm={8}
                                xs={8}
                                className="PetCardText"
                              >
                                年齡：5
                              </Col>
                              <Col
                                xl={6}
                                md={8}
                                sm={8}
                                xs={12}
                                className="PetCardText"
                              >
                                性別：男
                              </Col>
                            </Row>
                          </Col>

                          <Col xl={5} md={5} sm={5} xs={24}>
                            <Button
                              className="PetCardBtn"
                              type="primary"
                              onClick={showModal}
                            >
                              查看詳細
                            </Button>
                            <Modal
                              title="寵物資訊"
                              className="PetListModal"
                              open={isModalOpen}
                              onCancel={handleCancel}
                              cancelText="返回"
                            >
                              <Row
                                className="PetListDetail"
                                type="flex"
                                justify="center"
                              >
                                <Col>
                                  <Row type="flex" justify="center" align="top">
                                    <Col
                                      xl={8}
                                      md={8}
                                      sm={8}
                                      xs={24}
                                      className="RearingPetJmimgWarp"
                                    >
                                      <img
                                        className="RearingPetJmimg"
                                        src={images.jm}
                                      />
                                    </Col>

                                    <Col xl={14} md={14} sm={16} xs={22}>
                                      <Row type="flex" align="middle">
                                        <Col
                                          xl={12}
                                          md={12}
                                          sm={12}
                                          xs={12}
                                          className="PetCardTextDetail"
                                        >
                                          <div className="PetCardTextDetailText">
                                            姓名：阿金
                                          </div>
                                          <div className="PetCardTextDetailText">
                                            體型：大
                                          </div>
                                          <div className="PetCardTextDetailText">
                                            年齡：5
                                          </div>
                                        </Col>
                                        <Col
                                          xl={12}
                                          md={12}
                                          sm={12}
                                          xs={12}
                                          className="PetCardTextDetail"
                                        >
                                          <div className="PetCardTextDetailText">
                                            品種：拉不拉多
                                          </div>
                                          <div className="PetCardTextDetailText">
                                            性別：女
                                          </div>
                                          <div className="PetCardTextDetailText">
                                            絕育狀況：已結紮
                                          </div>
                                        </Col>

                                        <Col span={24}>
                                          <div className="PetCardTextDetailText">
                                            飼養期間：2016/08~2016/08
                                          </div>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                  <Row
                                    type="flex"
                                    align="top"
                                    justify="center"
                                    className="PetCardTextDetailbottom"
                                  >
                                    <Col xl={11} md={11} sm={11} xs={24}>
                                      <div className="PetCardTextDetailBottomTitle">
                                        個性
                                      </div>
                                      <hr></hr>
                                      <p className="PetCardTextDetailText">
                                        羞，內向。是個小公主
                                        同時也是個吃貨，每次吃完都嫌不夠
                                      </p>
                                    </Col>
                                    <Col xl={11} md={11} sm={11} xs={24}>
                                      <div className="PetCardTextDetailBottomTitle">
                                        提醒
                                      </div>
                                      <hr></hr>
                                      <p className="PetCardTextDetailText">
                                        運動量很大也需要大量的運動
                                      </p>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Modal>
                          </Col>
                        </Row>
                      </Radio.Button>
                      <Radio.Button className="ListPetCardRadio" value="a">
                        <Row
                          className="ListPetCardForm"
                          type="flex"
                          justify="center"
                          align="middle"
                        >
                          <Col md={6} sm={8} xs={10}>
                            <img className="RearingPetJmimg" src={images.ex4} />
                          </Col>
                          <Col md={13} sm={11} xs={14}>
                            <Row type="flex" align="middle">
                              <Col>
                                <p className="PetCardName">餅乾</p>
                              </Col>
                            </Row>
                            <Row type="flex" align="middle">
                              <Col
                                xl={22}
                                md={24}
                                sm={24}
                                xs={24}
                                className="PetCardText"
                              >
                                品種：米克斯
                              </Col>
                              <Col
                                xl={6}
                                md={8}
                                sm={8}
                                xs={8}
                                className="PetCardText"
                              >
                                年齡：4
                              </Col>
                              <Col
                                xl={6}
                                md={8}
                                sm={8}
                                xs={12}
                                className="PetCardText"
                              >
                                性別：女
                              </Col>
                            </Row>
                          </Col>

                          <Col xl={5} md={5} sm={5} xs={24}>
                            <Button
                              className="PetCardBtn"
                              type="primary"
                              onClick={showModal}
                            >
                              查看詳細
                            </Button>
                            <Modal
                              title="寵物資訊"
                              className="PetListModal"
                              open={isModalOpen}
                              onCancel={handleCancel}
                              cancelText="返回"
                            >
                              <Row
                                className="PetListDetail"
                                type="flex"
                                justify="center"
                              >
                                <Col>
                                  <Row type="flex" justify="center" align="top">
                                    <Col
                                      xl={8}
                                      md={8}
                                      sm={8}
                                      xs={24}
                                      className="RearingPetJmimgWarp"
                                    >
                                      <img
                                        className="RearingPetJmimg"
                                        src={images.jm}
                                      />
                                    </Col>

                                    <Col xl={14} md={14} sm={16} xs={22}>
                                      <Row type="flex" align="middle">
                                        <Col
                                          xl={12}
                                          md={12}
                                          sm={12}
                                          xs={12}
                                          className="PetCardTextDetail"
                                        >
                                          <div className="PetCardTextDetailText">
                                            姓名：阿金
                                          </div>
                                          <div className="PetCardTextDetailText">
                                            體型：大
                                          </div>
                                          <div className="PetCardTextDetailText">
                                            年齡：5
                                          </div>
                                        </Col>
                                        <Col
                                          xl={12}
                                          md={12}
                                          sm={12}
                                          xs={12}
                                          className="PetCardTextDetail"
                                        >
                                          <div className="PetCardTextDetailText">
                                            品種：拉不拉多
                                          </div>
                                          <div className="PetCardTextDetailText">
                                            性別：女
                                          </div>
                                          <div className="PetCardTextDetailText">
                                            絕育狀況：已結紮
                                          </div>
                                        </Col>

                                        <Col span={24}>
                                          <div className="PetCardTextDetailText">
                                            飼養期間：2016/08~2016/08
                                          </div>
                                        </Col>
                                      </Row>
                                    </Col>
                                  </Row>
                                  <Row
                                    type="flex"
                                    align="top"
                                    justify="center"
                                    className="PetCardTextDetailbottom"
                                  >
                                    <Col xl={11} md={11} sm={11} xs={24}>
                                      <div className="PetCardTextDetailBottomTitle">
                                        個性
                                      </div>
                                      <hr></hr>
                                      <p className="PetCardTextDetailText">
                                        羞，內向。是個小公主
                                        同時也是個吃貨，每次吃完都嫌不夠
                                      </p>
                                    </Col>
                                    <Col xl={11} md={11} sm={11} xs={24}>
                                      <div className="PetCardTextDetailBottomTitle">
                                        提醒
                                      </div>
                                      <hr></hr>
                                      <p className="PetCardTextDetailText">
                                        運動量很大也需要大量的運動
                                      </p>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Modal>
                          </Col>
                        </Row>
                      </Radio.Button>
                    </Radio.Group>

                    {/* <Button className="addPetBtn">新增寵物</Button> */}
                  </Col>

                  <Col span={24}>
                    <hr className="formHr"></hr>
                    <p className="formsubtitle">尋找共養人的原因</p>
                  </Col>
                  <Col span={22}>
                    <Form.Item
                      name="find-reason"
                      className="formContentTextArea"
                    >
                      <TextArea
                        rows={3}
                        defaultValue="喜因工作較忙需要有喜愛狗狗的有緣人一起撫養"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <p className="formsubtitle">共養需求</p>
                  </Col>
                  <Col span={22}>
                    <Form.Item
                      name="seach-needs"
                      className="formContentTextArea"
                    >
                      <TextArea
                        rows={3}
                        defaultValue="尋找有基本經濟能力、喜愛寵物的人"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row justify="center">
                  <Col lg={6} md={8} sm={10} xs={10} className="formBtnWarp">
                    <a href="/share-already">
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
