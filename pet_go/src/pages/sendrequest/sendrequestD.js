import React from "react";
import ButtonComponent from "../../components/button/button";
import ButtonDelete from "../../components/button/ButtonDelete";
import { Row, Col } from "antd";
import images from "../../config/images";
import "./sendrequest.less";

function SendrequestD() {
  return (
    <div id="Sendrequest">
      <Row type="flex" justify="center" align="middle">
        <Col
          xxl={14}
          xl={16}
          lg={18}
          md={18}
          sm={20}
          xs={22}
          className="RecordListwarp"
        >
          <Row type="flex" justify="center">
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <p className="RecordListTitle">我送出的請求</p>

              <Row type="flex" justify="center">
                <Col
                  xl={18}
                  lg={19}
                  md={20}
                  sm={20}
                  xs={22}
                  className="ListWarp"
                >
                 
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
                          <img className="listPetJmimg" src={images.google} />
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
                          <Row align="middle">
                            <Col>
                              <p className="PetCardName">Google</p>
                            </Col>
                            <Col>
                              <div className="PetCardLabel2">共養寵物</div>
                            </Col>
                          </Row>
                          <Row type="flex" align="bottom">
                            <Col xl={24} lg={24} md={24} sm={22} xs={22}>
                              <Row align="middle">
                                <span className="PetCardText">品種：法鬥</span>
                                <span className="PetCardText">性別：女</span>
                                <span className="PetCardText">年齡：8</span>

                                <span className="PetCardText">
                                  飼養日期：2015/06/12～
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
                      <Row align="end" className="ButtonWarp">
                        <Col className="ListButton">
                          <ButtonDelete
                            text="取消請求"
                            size="large"
                            name="cancel-request"
                          />
                        </Col>
                        <Col className="ListButton">
                          <a href="sent-request/share-pet-detaii">
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
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default SendrequestD;
