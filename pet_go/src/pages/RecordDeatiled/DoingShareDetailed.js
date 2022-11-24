import {
  Form,
  Col,
  Row,
  message,
  Space,
  Input,
  List,
  Avatar,
  Comment,
  Button,
} from "antd";
import moment from "moment";
import React, { useState } from "react";

import ButtonComponent from "../../components/button/button";

import "./DoingShareDetailed.less";
import images from "../../config/images";
import { Route } from "react-router-dom";

/*體驗者專區-查看按鈕的詳細寵物頁面*/
function DoingShareDetailed() {
  return (
    <div id="DoingShareDetailed">
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
                    <img className="DetailedJmimg" src={images.ex6} />
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
                      <div className="DetailText">姓名：圓圓</div>
                      <div className="DetailText">品種：荷蘭兔</div>
                      <div className="DetailText">體型：小型</div>
                    </Col>
                    <Col
                      xl={12}
                      md={12}
                      sm={24}
                      xs={24}
                      className="DetailTextWarp"
                    >
                      <div className="DetailText">年齡：2</div>

                      <div className="DetailText">性別：女</div>
                      <div className="DetailText">絕育狀況：已結紮</div>
                    </Col>

                    <Col span={24} className="DetailTextWarp">
                      <div className="DetailText">
                        飼養期間：2022-12-25 ～ 2022-12-26
                      </div>
                      <div className="DetailText">共養期間：2016/08/20~ </div>
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
                <Col xl={10} md={10} sm={18} xs={22}>
                  <div className="DetailTextTitle">個性</div>
                  <hr></hr>
                  <p className="DetailText">
                    害羞，內向。是個小公主 同時也是個吃貨，每次吃完都嫌不夠
                  </p>
                </Col>
                <Col xl={10} md={10} sm={18} xs={22}>
                  <div className="DetailTextTitle">提醒</div>
                  <hr></hr>
                  <p className="DetailText">運動量很大也需要大量的運動</p>
                </Col>
              </Row>

              <Row
                type="flex"
                align="top"
                justify="center"
                className="PetCardTextDetailbottom"
              >
                <Col xl={10} md={10} sm={18} xs={22}>
                  <div className="DetailTextTitle">尋找共養的原因</div>
                  <hr></hr>
                  <p className="DetailText">
                    那幾天要去玩，希望有個愛狗狗的人可以帶帶
                  </p>
                </Col>
                <Col xl={10} md={10} sm={18} xs={22}>
                  <div className="DetailTextTitle">共養需求</div>
                  <hr></hr>
                  <p className="DetailText">住附近，有耐心</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify="center">
        <Col xl={7} md={10} sm={12} xs={14} className="caption">
          <hr />
          <h1>共養人員</h1>
          <hr />
        </Col>
      </Row>
      <Row justify="center" className="captionBottom">
      <Col lg={14} md={18} sm={20} xs={22}>
          <Row className="commentary">
            <Col xl={5} md={6} sm={8} xs={8} className="peopleImage">
              <img src={images.pepole3} />
            </Col>

            <Col xl={19} md={18} sm={16} xs={16}>
              <Row justify="center" align="top" className="trimPeopleComm">
                <Col span={12} className="peopleComm">
                  <div className="peopleCommShare">
                    <h2>黃鼎佑</h2>
                    <div className="PetCardLabel2">主要飼主</div>
                  </div>
                  <div className="leftPart">
                    <div className="sharePeopleItem">
                      <p>地區：台中市霧峰區</p>
                      <p>年齡：20</p>
                      <p>性別：男</p>
                    </div>
                  </div>
                </Col>
                <Col span={12} className="peopleComm">
                  <div className="rightPart">
                    <h2>聯絡資訊</h2>
                    <hr />
                    <h3>
                      <img className="formLineImg" src={images.line} />
                      <p>ID：651354364</p>
                    </h3>
                  </div>
                </Col>
               
              </Row>
              
            </Col>

            
          </Row>

          <Row className="commentary">
            <Col xl={5} md={6} sm={8} xs={8} className="peopleImage">
              <img src={images.bb} />
            </Col>

            <Col xl={19} md={18} sm={16} xs={16}>
              <Row justify="center" align="top" className="trimPeopleComm">
                <Col span={12} className="peopleComm">
                  <div className="peopleCommShare">
                    <h2>白白</h2>
                    
                      <div className="PetCardLabel2">共養人員</div>
                            
                  </div>
                  <div className="leftPart">
                    <div className="sharePeopleItem">
                      <p>地區：台中市大里區</p>
                      <p>年齡：19</p>
                      <p>性別：女</p>
                    </div>
                  </div>
                </Col>
                <Col span={12} className="peopleComm">
                  <div className="rightPart">
                    <h2>聯絡資訊</h2>
                    <hr />
                    <h3>
                      <img className="formLineImg" src={images.line} />
                      <p>ID：a52195219a</p>
                    </h3>
                  </div>
                </Col>
               
              </Row>
              
            </Col>

            
          </Row>
        </Col>
      </Row>

      <Row justify="center" style={{ marginbottom: "10%" }}>
        <a href="/Record/DoingShare/list">
          <ButtonComponent
            text="返回"
            size="large"
            name="goToEx"
            onClick="/Record/DoingShare/list"
          />
        </a>
      </Row>
    </div>
  );
}

export default DoingShareDetailed;
