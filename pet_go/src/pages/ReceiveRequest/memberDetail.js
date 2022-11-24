import React, { useState, createContext } from "react";
import {
  Col,
  Row,
  message,
  Space,
  Modal,
  Form,
  Panel,
  Collapse,
  Checkbox,
} from "antd";
import ButtonComponent from "../../components/button/button";
// import './owner.less'
import "./memberDetail.less";
import images from "../../config/images";

const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);

const config = {
  title: "Use Hook!",
  content: (
    <>
      <ReachableContext.Consumer>
        {(name) => `Reachable: ${name}!`}
      </ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>
        {(name) => `Unreachable: ${name}!`}
      </UnreachableContext.Consumer>
    </>
  ),
};

/*我收到的請求-查看會員詳細*/
function memberDetail() {
  const { Panel } = Collapse;

  const onChange1 = (key) => {
    console.log(key);
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const info = () => {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div id="memberDetail">
      <Row type="flex" justify="center" align="middle">
        <Col className="DoingShareDetailedWarp" lg={16} md={18} sm={20} xs={22}>
          <Row className="PetListDetail" type="flex" justify="center">
            <Col>
              <Row type="flex" justify="center" align="top">
                <Col
                  xl={8}
                  md={8}
                  sm={24}
                  xs={24}
                  className="DetailedJmimgWarp"
                >
                  <div className="DetailedJmimgWarp">
                    <img className="DetailedJmimg" src={images.pepole1} />
                  </div>
                </Col>

                <Col xl={14} md={14} sm={18} xs={22}>
                  <Row type="flex" align="top" className="DetailTextRight">
                    <Col
                      xl={12}
                      md={12}
                      sm={24}
                      xs={24}
                      className="DetailTextWarp"
                    >
                      <div className="DetailText">姓名：Chocobo</div>
                      <div className="DetailText">年齡：19</div>
                    </Col>
                    <Col
                      xl={12}
                      md={12}
                      sm={24}
                      xs={24}
                      className="DetailTextWarp"
                    >
                      <div className="DetailText">性別：女</div>
                      <div className="DetailText">地區：台中市西屯區</div>
                    </Col>
                    <Col
                      xl={12}
                      md={12}
                      sm={24}
                      xs={24}
                      className="DetailTextWarp"
                    >
                      <div className="DetailText">聯絡方式：0926289869</div>
                      <div className="DetailText">
                        <div className="LineWarp">
                          <img className="formLineImg" src={images.line} />
                          <p>ID：0926289869</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col xl={20} lg={20} md={20} sm={20} xs={22}>
                  <div className="DetailTextTitle">請求項目</div>
                  <hr></hr>
                  <Row className="ListPetCard" justify="center" align="end">
                    <Col xl={19} lg={19} md={24} sm={24} xs={24}>
                      <Row type="flex" align="strat">
                        <Col
                          xxl={6}
                          xl={7}
                          lg={8}
                          md={8}
                          sm={8}
                          xs={10}
                          className="listPetJmimgWarp"
                        >
                          <img className="listPetJmimg" src={images.jm} />
                        </Col>
                        <Col
                          xxl={18}
                          xl={16}
                          lg={16}
                          md={16}
                          sm={16}
                          xs={14}
                          className="PetCardCenter"
                        >
                          <Row>
                            <Col>
                              <p className="PetCardName">吉米</p>
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
                                  體驗日期：2022/06/12-2022/06/30
                                </span>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>

                    <Col
                      xl={5}
                      lg={5}
                      md={24}
                      sm={24}
                      xs={24}
                      className="ListButtonWarp"
                    >
                      <a href="/receive-request/member-detail/request-pet-detail">
                        <ButtonComponent
                          text="查看詳細"
                          size="large"
                          name="more-detail"
                        />
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row type="flex" justify="center">
                <Col xl={20} lg={20} md={20} sm={20} xs={22}>
                  <div className="DetailTextTitle">個人介紹</div>
                  <hr></hr>
                  <p className="DetailText">
                    　我好比一隻色如濃墨的黑貓，在一個環境中具有保護色，能內斂自己並與周遭配合。柔軟的身段能讓我與他人相處融洽且能接受來自各方的指教與評論。輝瑩的瞳仁能讓我在闃黑的夜中也保持冷靜，且見識能深遠不會拘泥於眼前。絕佳的平衡感賜予我在課業和休閒娛樂不偏於一方。靈活的體態讓我在處理問題時能採用各種角度，不會制式化死板。我有貓的孤高尊嚴，也有貓的逗趣玩心，喜歡慵懶窩床欣賞音樂，也喜歡活蹦亂跳打球嘻鬧。時而活潑時而寧靜。{" "}
                  </p>
                </Col>
              </Row>

              <Row type="flex" justify="center">
                <Col xl={20} lg={20} md={20} sm={20} xs={22}>
                  <div className="DetailTextTitle">想體驗的原因</div>
                  <hr></hr>
                  <p className="DetailText">
                    了解清楚寵物想體驗的原因到底是一種怎麼樣的存在，是解決一切問題的關鍵。若能夠欣賞到寵物想體驗的原因的美，相信我們一定會對寵物想體驗的原因改觀。
                  </p>
                </Col>
              </Row>

              <Row justify="center">
                <Col
                  xl={20}
                  lg={20}
                  md={20}
                  sm={20}
                  xs={22}
                  className="articleMoreWarp"
                >
                  <div className="DetailTextTitle">養寵經歷</div>
                  <hr></hr>
                  <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                    <Panel header="點擊查看更多經歷" key="1">
                      <Form>
                        <h2 className="RearingPetSubheader">基本寵物資訊</h2>
                        <Form.Item name="Basic-Pet-Information">
                          <Checkbox.Group
                            style={{ width: "100%" }}
                            onChange={onChange}
                          >
                            <Row className="RearingPetCheckboxWarp">
                              <Col md={8} sm={12} xs={12}>
                                <Checkbox  value="A">
                                  住處允許養寵
                                </Checkbox>
                              </Col>
                              <Col md={8} sm={12} xs={12}>
                                <Checkbox  value="B">
                                  有照顧寵物的時間
                                </Checkbox>
                              </Col>
                              <Col md={8} sm={12} xs={12}>
                                <Checkbox  value="C">
                                  有養寵經濟基礎
                                </Checkbox>
                              </Col>
                              <Col md={8} sm={12} xs={12}>
                                <Checkbox  value="D">
                                  願意陪伴寵物
                                </Checkbox>
                              </Col>
                              <Col md={8} sm={12} xs={12}>
                                <Checkbox  value="E">
                                  有責任感及耐心
                                </Checkbox>
                              </Col>
                              <Col md={8} sm={12} xs={12}>
                                <Checkbox disabled value="F">
                                  同居者同意且支持
                                </Checkbox>
                              </Col>
                              <Col md={8} sm={12} xs={12}>
                                <Checkbox  value="G">
                                  住處穩定
                                </Checkbox>
                              </Col>
                            </Row>
                          </Checkbox.Group>
                        </Form.Item>
                        <hr className="RearingPetHr"></hr>
                        <Row>
                          <h2 className="RearingPetSubheader">養寵經歷</h2>
                          <Col md={24}>
                            <Row
                              className="PetCard"
                              md={22}
                              xs={22}
                              type="flex"
                              justify="center"
                              align="middle"
                            >
                              <Col span={6}>
                                <img
                                  className="RearingPetJmimg"
                                  src={images.ex5}
                                />
                              </Col>
                              <Col span={18}>
                                <Row type="flex" align="middle">
                                  <Col>
                                    <p className="PetCardName">尼可</p>
                                  </Col>
                                  <Col>
                                    <div className="PetCardLabel1">
                                      自家寵物
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col span={24}>
                                    <div className="PetCardContent">
                                      <div className="PetCardContent1">
                                        <div className="PetCardText">
                                          品種：米克斯
                                        </div>
                                        <div className="PetCardText">
                                          年齡：3
                                        </div>
                                        <div className="PetCardText">
                                          性別：男
                                        </div>
                                      </div>
                                      <div className="PetCardContent1">
                                        <div className="PetCardText">
                                          體型：中型
                                        </div>
                                        <div className="PetCardText">
                                          飼養期間：2022-12-28 ～ 2022-12-30
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                      

                            <Row
                              className="PetCard"
                              md={22}
                              type="flex"
                              justify="center"
                              align="middle"
                            >
                              <Col span={6}>
                                <img
                                  className="RearingPetJmimg"
                                  src={images.ex4}
                                />
                              </Col>
                              <Col span={18}>
                                <Row type="flex" align="middle">
                                  <Col>
                                    <p className="PetCardName">餅乾</p>
                                  </Col>
                                  <Col>
                                    <div className="PetCardLabel3">
                                      體驗寵物
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col span={24}>
                                    <div className="PetCardContent">
                                      <div className="PetCardContent1">
                                        <div className="PetCardText">
                                          品種：米克斯
                                        </div>
                                        <div className="PetCardText">
                                          年齡：4
                                        </div>
                                        <div className="PetCardText">
                                          性別：女
                                        </div>
                                      </div>
                                      <div className="PetCardContent1">
                                        <div className="PetCardText">
                                          體型：中型
                                        </div>
                                        <div className="PetCardText">
                                          飼養期間：2016/08~
                                        </div>
                                      </div>
                                    </div>
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
                                <p>飼養資歷：3年</p>
                                
                              </Col>
                              <Col md={10} sm={24} xs={12}>
                              <p>飼養過寵物數量：2個</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col
                            md={20}
                            sm={21}
                            xs={21}
                            type="flex"
                            justify="center"
                          >
                            <p>飼養過哪些動物：狗</p>
                            
                          </Col>
                          <Col
                            md={20}
                            sm={21}
                            xs={21}
                            type="flex"
                            justify="center"
                          >
                             <p>家中可活動範圍：寬敞</p>
                         
                          </Col>

                         
                        </Row>
                      </Form>
                    </Panel>
                  </Collapse>
                </Col>
              </Row>

              <Row justify="center">
                <Col span={24} className="trimBtn">
                  <a href="/Receive-request">
                    <ButtonComponent text="稍後" name="memberDetailBtn1" />
                  </a>
                  <a href="/Receive-request">
                    <ButtonComponent text="接受" name="memberDetailBtn2" />
                  </a>
                  <a href="/Receive-request">
                    <ButtonComponent text="拒絕" name="memberDetailBtn3" />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default memberDetail;
