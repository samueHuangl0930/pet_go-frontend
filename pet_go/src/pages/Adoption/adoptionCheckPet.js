import React, { useState, createContext } from "react";
import { FacebookFilled } from "@ant-design/icons";
import { useParams } from "react-router-dom"; //使用useParam傳參數
import { BsLine } from "react-icons/bs";
import { Col, Row, message, Space, Modal } from "antd";
import axios from "axios";
import ButtonComponent from "../../components/button/button";
// import './owner.less'
import "./adoptionCheckPet.less";
import images from "../../config/images";

const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);

const config = {
  title: "Use Hook!",
  content: (
    <>
      <ReachableContext.Consumer>
        {(name) => `Reachable: ${name}!`}
      </ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>
        {(name) => `Unreachable: ${name}!`}
      </UnreachableContext.Consumer>
    </>
  ),
};

/*共養專區-查看詳細寵物頁面*/
function AdoptionCheckPet() {
  const [modal, contextHolder] = Modal.useModal();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const info = () => {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  };
  const baseURL = "http://127.0.0.1:8000/";
  let { id } = useParams();
  const [pets, setPets] = useState([]);
  const [shareds, setShareds] = useState([]);
  const [owners, setOwners] = useState([]);
  const [sharers, setSharers] = useState([]);

  React.useEffect(() => {
    // fetch_data()
    const token = localStorage.getItem("token");
    const config = {
      url: "http://127.0.0.1:8000/api/share-already/share-pet-detail/" + id, // 只有此為必需
      method: "get", // 大小寫皆可
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "X-Requested-With": "XMLHttpRequest",
        userToken: `${token}`,
      },
      responseType: "json", // 伺服器回應的數據類型
    };

    try {
      axios(config).then((res) => {
        console.log(res.data);
        setPets(res.data.pets);
        setShareds(res.data.shared);
        setOwners(res.data.main_sharer);
        setSharers(res.data.sharer);
      }, []);
    } catch (error) {
      throw error;
      // Do  with error
    }
  }, []);
  console.log("pets=>", pets);
  console.log("shareds=>", shareds);
  console.log("owners=>", owners);
  console.log("sharers=>", sharers);

  return (
    <div id="adoptionCheckPet">
      <Row type="flex" justify="center" align="middle">
        {pets.map((pet, index) => {
          return (
            <Col
              className="DoingShareDetailedWarp"
              lg={16}
              md={18}
              sm={20}
              xs={22}
              key={index}
            >
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
                        <img
                          className="DetailedJmimg"
                          src={baseURL + pet.img}
                        />
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
                          <div className="DetailText">姓名：{pet.name}</div>
                          <div className="DetailText">品種：{pet.variety}</div>
                          <div className="DetailText">體型：{pet.size}</div>
                        </Col>
                        <Col
                          xl={12}
                          md={12}
                          sm={24}
                          xs={24}
                          className="DetailTextWarp"
                        >
                          <div className="DetailText">年齡：{pet.age}</div>

                          <div className="DetailText">性別：{pet.sex}</div>
                          <div className="DetailText">
                            絕育狀況：{pet.ligation}
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
                      <p className="DetailText">{pet.intro}</p>
                    </Col>
                    <Col xl={10} md={10} sm={18} xs={22}>
                      <div className="DetailTextTitle">提醒</div>
                      <hr></hr>
                      <p className="DetailText">{pet.remind}</p>
                    </Col>
                  </Row>
                  {shareds.map((shared, index) => {
                    return (
                      <Row
                        type="flex"
                        align="top"
                        justify="center"
                        className="PetCardTextDetailbottom"
                        key={index}
                      >
                        <Col xl={10} md={10} sm={18} xs={22}>
                          <div className="DetailTextTitle">尋找共養的原因</div>
                          <hr></hr>
                          <p className="DetailText">{shared.reason}</p>
                        </Col>
                        <Col xl={10} md={10} sm={18} xs={22}>
                          <div className="DetailTextTitle">共養需求</div>
                          <hr></hr>
                          <p className="DetailText">{shared.need}</p>
                        </Col>
                      </Row>
                    );
                  })}
                </Col>
              </Row>
            </Col>
          );
        })}
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
          {owners.map((owner, index) => {
            return (
              <Row className="commentary" key={index}>
                <Col xl={5} md={6} sm={8} xs={8} className="peopleImage">
                  <img src={baseURL + owner.img} />
                </Col>
                <Col xl={19} md={18} sm={16} xs={16}>
                  <Row justify="center" align="top" className="trimPeopleComm">
                    <Col span={12} className="peopleComm">
                      <div className="peopleCommShare">
                        <h2>{owner.name}</h2>
                        <div className="PetCardLabel3">主要飼主</div>
                      </div>
                      <div className="leftPart">
                        <div className="sharePeopleItem">
                          <p>地區：{owner.location}</p>
                          <p>年齡：{owner.age}</p>
                          <p>性別：{owner.sex}</p>
                        </div>
                      </div>
                    </Col>
                    <Col span={12} className="peopleComm">
                      <div className="rightPart">
                        <h2>聯絡資訊</h2>
                        <hr />
                        <h3>
                          <img className="formLineImg" src={images.line} />
                          <p>ID：{owner.line}</p>
                        </h3>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            );
          })}
          {sharers == "目前無共養人"
            ? ""
            : sharers.map((sharer, index) => {
                return (
                  <Row className="commentary" key={index}>
                    <Col xl={5} md={6} sm={8} xs={8} className="peopleImage">
                      <img src={baseURL + sharer.img} />
                    </Col>
                    <Col xl={19} md={18} sm={16} xs={16}>
                      <Row
                        justify="center"
                        align="top"
                        className="trimPeopleComm"
                      >
                        <Col span={12} className="peopleComm">
                          <div className="peopleCommShare">
                            <h2>{sharer.name}</h2>
                            <div className="PetCardLabel4">共養人員</div>
                          </div>
                          <div className="leftPart">
                            <div className="sharePeopleItem">
                              <p>地區：{sharer.location}</p>
                              <p>年齡：{sharer.age}</p>
                              <p>性別：{sharer.sex}</p>
                            </div>
                          </div>
                        </Col>
                        <Col span={12} className="peopleComm">
                          <div className="rightPart">
                            <h2>聯絡資訊</h2>
                            <hr />
                            <h3>
                              <img className="formLineImg" src={images.line} />
                              <p>ID：{sharer.line}</p>
                            </h3>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                );
              })}
        </Col>
      </Row>

      <Row justify="center">
        <a href="/share-already/search-sharer-form">
          <ButtonComponent
            type="primary"
            text="前往體驗"
            size="large"
            name="goToEx"
            // handleSubmit={info}
          />
        </a>
      </Row>
    </div>
  );
}

export default AdoptionCheckPet;
