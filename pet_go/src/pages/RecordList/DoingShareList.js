import images from "../../config/images";
import React, { useState } from "react";
import ButtonComponent from "../../components/button/button";
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
} from "antd";
import { AiOutlineFileSearch } from "react-icons/ai";
import "./ExperienceList.less";

function ExperienceListPage() {

  
  return (
    <div className="ExperienceList">
        <Row type="flex" justify="center" align="middle">
        <Col xxl={14} xl={16} lg={18} md={18} sm={20} xs={22} className="RecordListwarp">
          <Row type="flex" justify="center">
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <p className="RecordListTitle">正在共養</p>

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
                          <img className="listPetJmimg" src={images.ex6} />
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
                              <p className="PetCardName">圓圓</p>
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
                                  體驗日期：2022-12-25 ～ 2022-12-26
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
                     <a  href="/Record/DoingShare/detailed">
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
    </div>
  );
}

export default ExperienceListPage;
