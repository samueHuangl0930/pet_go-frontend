import React, { useState, createContext } from 'react';
import { useParams } from 'react-router-dom'; //使用useParam傳參數
import { Col,Row ,message,Space,Modal} from "antd";
import axios from 'axios';
import ButtonComponent from "../../components/button/button";
// import './owner.less'
import './exPetCheckPet.less'
import images from "../../config/images";

const ReachableContext = createContext(null);
const UnreachableContext = createContext(null);

const config = {
    title: 'Use Hook!',
    content: (
      <>
        <ReachableContext.Consumer>{(name) => `Reachable: ${name}!`}</ReachableContext.Consumer>
        <br />
        <UnreachableContext.Consumer>{(name) => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
      </>
    ),
  };

/*體驗者專區-查看按鈕的詳細寵物頁面*/
function ExPetCheckPet() {

  const baseURL='http://127.0.0.1:8000/';

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
        title: 'This is a notification message',
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        ),
    
        onOk() {},
      });
  };
  let { id } = useParams();

  const [details, setDetails] = useState([])
  const [comments, setComments] = useState([])
  React.useEffect(() => {
    // fetch_data()
    const token=localStorage.getItem('token');
    const config = {
      url: 'http://127.0.0.1:8000/api/experience/experiencer-illustrate/card/ex-pet-detail/',  // 只有此為必需
      method: 'get', // 大小寫皆可
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'X-Requested-With': 'XMLHttpRequest',
        'userToken':`${token}`

      },
      responseType: 'json', // 伺服器回應的數據類型
    }

    try {
      axios(config)
        .then(res => {
          console.log(res.data)
          setDetails(res.data.detail)
          setComments(res.data.comments)
        }, []);
    }
    catch (error) {
      throw error;
      // Do  with error
    }
  }, []);
  console.log('details=>', details);
  // console.log('comments=>', comments);

    return (
        <div id="ExPetCheckPet">
          
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
                    <img className="DetailedJmimg" src={images.ex1} />
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
                      <div className="DetailText">姓名：多多</div>
                      <div className="DetailText">品種：哈瓦帝犬</div>
                      <div className="DetailText">體型：小型</div>
                    </Col>
                    <Col
                      xl={12}
                      md={12}
                      sm={24}
                      xs={24}
                      className="DetailTextWarp"
                    >
                      <div className="DetailText">年齡：3</div>
                      <div className="DetailText">性別：男</div>
                      <div className="DetailText">絕育狀況：未結紮</div>
                    </Col>

                    <Col span={24} className="DetailTextWarp">
                      <div className="DetailText">
                        體驗期間：2022-12-09 ～ 2022-12-12
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
              <img src={images.pepole9} />
            </Col>

            <Col xl={19} md={18} sm={16} xs={16}>
              <Row className="trimPeopleComm">
                <Col span={24} className="peopleComm">
                  <h2>蕭承佑</h2>
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

      <Row justify="center" style={{ marginbottom: "10%" }}>
        <a href="/sent-request">
        <ButtonComponent
          text="返回"
          size="large"
          name="goToEx"
          onClick="/Record/DoingShare/list"
        /></a>
      </Row>
        </div>
    );
}

export default ExPetCheckPet;