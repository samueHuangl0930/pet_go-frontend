import { Divider } from "antd";
import ButtonComponent from "../../components/button/button";
import images from "../../config/images";
import React from "react";
import { Col, message, Row, Tag, Steps } from "antd";

import "./Experience.less";

function ExperienceHomePage() {
  return (
    <div className="body">
      <div className="top">
        <img className="ExHomeimg" src={images.ExHome} />
        <div className="ExHomeimgOn"></div>
        <div className="ExHomeTitle">飼主體驗</div>
      </div>
      <div className="under">
        <div className="ExHomeTxt1">選擇進入身份</div>
        <Row className="block" type="flex" justify="center" align="middle">
          <Col className="block1" xl={10} lg={12} md={12} sm={24} xs={24}>
            <a className="wrap" href="/experience/experiencer-illustrate">
              <img className="ExHomeimg" src={images.ExHome1} />
              <div className="blockTitle">體驗者專區</div>
              <div className="blockContent">
                飼主體驗主要分為兩大專區，體驗者專區是讓使用者體驗當期間性的飼主，可以讓猶豫養寵物、或是有其他需求的使用者藉此享受養寵物的樂趣，也能評估往後養寵物的意願
              </div>
            </a>
          </Col>

          <Col className="block1" xl={10} lg={12} md={12} sm={24} xs={24}>
            <a className="wrap" href="/experience/owner-illustrate">
              <img className="ExHomeimg" src={images.ExHome2} />
              <div className="blockTitle">飼主專區</div>
              <div className="blockContent">
                飼主專區則是讓有飼養寵物的使用者提供寵物給其他使用者體驗當飼主，可以讓想暫時放鬆幾天、或是有幾天不在家，怕毛孩沒有人照顧的使用者藉此將毛孩提供給想試試飼育寵物之使用者照顧。
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ExperienceHomePage;
