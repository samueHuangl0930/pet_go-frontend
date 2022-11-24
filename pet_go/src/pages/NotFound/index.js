import React from "react";
import "./index.less";
import images from "../../config/images";
import { Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  let navigate = useNavigate();
  return (
    <div id="NotFoundContainer">
      <Row className="container" justify="center">
        <Col span={24} className="imgBlock">
          <div className="title">
            <h1>404</h1>
            <p>ERROR</p>
          </div>
          <img
            src={images.NotFoundBG}
            className="NotFoundImage"
            alt="NotFoundImage"
          />
        </Col>
        <Col  lg={5} md={6} xs={18} sm={8} className="buttonBlock">
          <Button
            className="globalButton"
            size="large"
            onClick={() => navigate(-1)}
          >
            回上一頁
          </Button>
        </Col>
        <Col lg={5} md={6} xs={18} sm={8} className="buttonBlock">
          <Button
            className="globalButton"
            size="large"
            onClick={() => navigate("/")}
          >
            回首頁
          </Button>
        </Col> 
      </Row>
    </div>
  );
}

export default NotFoundPage;
