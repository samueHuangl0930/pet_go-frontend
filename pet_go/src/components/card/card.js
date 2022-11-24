import { Card, Col,Row } from "antd";
import React from "react";
import "./card.less";

// const { Meta } = Card;

function CardComponent(props) {
  const { img, title, icon, text, name, btn, handleSubmit, light } = props;
  return (
    <Card
      hoverable
      className={name}
      onClick={handleSubmit}
    >
      <div className="imgwarp">{img}</div>
      <div className="nameWarp">
        {title}
        {icon}
      </div>

      {text}
      <Row>
        <Col span={12}> {btn}</Col>
        <Col  span={12} className="lightWarp"> {light}</Col>
      </Row>
    </Card>
  );
}
export default CardComponent;
