import { Card, Col, Row } from "antd";
import React from "react";
import "./card.less";
import images from "../../config/images";

// const { Meta } = Card;

function CardComponent2(props) {
  const { img, title, icon, text, name, btn, handleSubmit, light } = props;
  return (
    <Card
      hoverable
      // cover={<img alt="pet" src={images.expet} />}
      // title={title}
      // description={text}
      className={name}
      onClick={handleSubmit}
    >
      <div className="imgwarp">{img}</div>
      <div className="nameWarp">
        {title}
        {icon}
      </div>

      {text}

      {btn}
    </Card>
  );
}
export default CardComponent2;
