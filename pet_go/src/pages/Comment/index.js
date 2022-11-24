import React from "react";
import { Carousel } from "antd";
import ButtonComponent from "../../components/button/button";
import { Row, Col, message, Card } from "antd";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import images from "../../config/images";
import "./index.less";
import _ from "lodash";
import axios from "axios";

const contentStyle = {
  height: "450px",
  color: "#fff",
  // lineHeight: '30px',
  textAlign: "center",
  background: "#364d79",
};

function Comment() {
  const [comments, setComments] = useState([]);
  React.useEffect(() => {
    // fetch_data()
    const token=localStorage.getItem('token');
    const config = {
      url: "http://127.0.0.1:8000/api/comment", // 只有此為必需
      method: "get", // 大小寫皆可
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "X-Requested-With": "XMLHttpRequest",
        'userToken':`${token}`
      },
      responseType: "json", // 伺服器回應的數據類型
    };
    try {
      axios(config).then((res) => {
        setComments(res.data.comment);
      }, []);
    } catch (error) {
      throw error;
      // Do  with error
    }
  }, []);
  console.log("comments=>", comments);
  return (
    <div id="Comment">
      <Row justify="center" align="center" className="container">
        <Col lg={16} md={18} sm={20} xs={22} className="Commentlist">
          <div className="Commenttitle">
            <h1>我的評論</h1>
          </div>
          <Row className="CommentlistrowWarp">
            <Col lg={24} md={24} sm={24} xs={24}>
                {(comments)==undefined?<div className='undefined'><h1>目前尚無評論</h1></div>:
                (comments).map((comment, index) => {
                  return (
                    <Row className="Commentlistshow" key={index}>
                        <Col lg={18} md={20} sm={22} xs={24}>
                          <Row className="commentary">
                            <Col xl={5} md={6} sm={8} xs={8} className="peopleImage">
                              <img src={comment.img} />
                            </Col>
                            <Col xl={19} md={18} sm={16} xs={16}>
                              <Row className="trimPeopleComm">
                                <Col span={24} className="peopleComm">
                                  <h2>{comment.name}</h2>
                                  <hr />
                                  <p>{comment.comment}</p>
                                </Col>
                                <Col span={24} className="commDate">
                                  <span>{comment.updated_at}</span>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                    </Row>
                  );
                })}
                  
                {/* ); */}
              {/* })} */}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Comment;
