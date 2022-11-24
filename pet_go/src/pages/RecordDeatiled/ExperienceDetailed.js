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

import "./ExperienceDetailed.less";
import images from "../../config/images";
import { Route } from "react-router-dom";

const { TextArea } = Input;
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Row type="flex" justify="center" align="middle">
      <Col span={24}>
        <div className="commentsWarp">
          <Input
            placeholder="留言..."
            onChange={onChange}
            value={value}
            className="commentsInput"
          />

          <Button
            htmlType="submit"
            loading={submitting}
            onClick={onSubmit}
            type="primary"
            className="commentsBtn"
          >
            送出
          </Button>
        </div>
      </Col>
    </Row>
  </>
);
/*體驗者專區-查看按鈕的詳細寵物頁面*/
function ExperienceDetailed() {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Han Solo",
          avatar: images.jm,
          content: <p>{value}</p>,
          datetime: moment("2016-11-22").fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div id="ExperienceDetailed">
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
                    <img className="DetailedJmimg" src={images.knock} />
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
                      <div className="DetailText">姓名：芋頭</div>
                      <div className="DetailText">品種：米克斯</div>
                      <div className="DetailText">體型：中型</div>
                    </Col>
                    <Col
                      xl={12}
                      md={12}
                      sm={24}
                      xs={24}
                      className="DetailTextWarp"
                    >
                      <div className="DetailText">年齡：6</div>

                      <div className="DetailText">性別：女</div>
                      <div className="DetailText">絕育狀況：已結紮</div>
                    </Col>

                    <Col span={24} className="DetailTextWarp">
                      <div className="DetailText">
                        體驗期間：2022-12-15 ～ 2022-12-18
                      </div>
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
                  <div className="DetailTextTitle">尋找體驗者的原因</div>
                  <hr></hr>
                  <p className="DetailText">
                    那幾天要去玩，希望有個愛狗狗的人可以帶帶
                  </p>
                </Col>
                <Col xl={10} md={10} sm={18} xs={22}>
                  <div className="DetailTextTitle">體驗需求</div>
                  <hr></hr>
                  <p className="DetailText">住附近，有耐心</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify="center">
        <Col xl={5} md={5} sm={8} xs={10} className="caption">
          <hr />
          <h1>評論</h1>
          <hr />
        </Col>
      </Row>
      <Row justify="center" className="captionBottom">
        <Col lg={14} md={18} sm={20} xs={22}>
          <Row className="commentary">
            <Col xl={5} md={6} sm={8} xs={8} className="peopleImage">
              <img src={images.bb} />
            </Col>

            <Col xl={19} md={18} sm={16} xs={16}>
              <Row className="trimPeopleComm">
                <Col span={24} className="peopleComm">
                  <h2>白婷鈺</h2>
                  <hr />
                  <p>牠很好帶又乖乖的，個性溫馴可愛</p>
                </Col>
                <Col span={24} className="commDate">
                  <span>2022/06/16</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify="center" className="CommentBar">
        <Col lg={14} md={16} sm={18} xs={20}>
          {comments.length > 0 && <CommentList comments={comments} />}
          <Comment
            content={
              <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        </Col>
      </Row>

      <Row justify="center" style={{ marginbottom: "10%" }}>
        <a href="/Record/Experience/list">
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

export default ExperienceDetailed;
