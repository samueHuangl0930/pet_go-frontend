import React from "react";
import { Col, Row, message } from "antd";
import ButtonComponent from "../../components/button/button";
import ButtonDelete from "../../components/button/ButtonDelete";
import "./owner.less";
import images from "../../config/images";

function Owner() {
  const add = () => {
    message.add("新增寵物成功");
  };
  const del = () => {
    message.del("確定移除寵物？");
  };
  const check = () => {
    message.check("確定移除寵物？");
  };

  return (
    <div id="owner">
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
            <div className="topWarp">
              <p className="RecordListTitle">現有的體驗寵物</p>

              <div className="addExPetWarp">
                <a href="/Experience/owner-illustrate/post/add-form">
                  <ButtonComponent
                    text="新增寵物"
                    size="large"
                    name="addExPet"
                  />
                </a>
              </div>
            </div>
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
                    <Row align="end" className="ButtonWarp">
                      <Col className="ListButton">
                        
                          <ButtonDelete
                            text="取消請求"
                            size="large"
                            name="cancel-request"
                          />
                        
                      </Col>
                      <Col className="ListButton">
                        <a href="/Record/Experience/detailed">
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

export default Owner;
