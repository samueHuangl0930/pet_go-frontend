import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "antd";
import ButtonComponent from "../../components/button/button";
import { Row, Col, Card } from "antd";
// import { useEffect, useState } from "react";
import Slider from "react-slick";
import { EnvironmentOutlined } from "@ant-design/icons";
import images from "../../config/images";
import "./index.less";

import _ from "lodash";

const contentStyle = {
  height: "450px",
  color: "#fff",
  // lineHeight: '30px',
  textAlign: "center",
  background: "#364d79",
};
console.log("Home.index進入");

function Home(props) {
  console.log("Home.index進入內部");
  // useEffect(() =>{
  //   axios.get('http://127.0.0.1:8000/')
  //   .then(res=>{
  //     console.log(res)
  //     setPosts(res.data)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  //   // axios({
  //   //   method: 'get',
  //   //   headers: { 'Content-Type': 'application/json'},
  //   //   url: 'http://127.0.0.1:8000/api/',
  //   // }).then(function (response) {
  //   //   console.log(response);
  //   //   setPosts(response.data)
  //   // });
  // })

  const [dotPosition, setDotPosition] = useState("top");

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log("111", windowSize);

  const autoplay = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const { Meta } = Card;

  // React.useEffect(() => {
  //   // axios.get('http://127.0.0.1:8000/api/')
  //   //     .set('Access-Control-Allow-Origin','*',
  //   //         'Access-Control-Allow-Headers', '*',
  //   //         'X-Requested-With','XMLHttpRequest',
  //   //         'Access-Control-Allow-Methods', '*')
  //   //     .then(function (response) {
  //   //         console.log(response);
  //   //     })
  //   //     .catch(function (error) {
  //   //         console.log(error);
  //   //     });
  //   const config = {
  //     url: 'http://127.0.0.1:8000/api/',  // 只有此為必需
  //     method: 'get', // 大小寫皆可
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Headers':'*',
  //       'X-Requested-With':'XMLHttpRequest',
  //     },
  //     responseType: 'json', // 伺服器回應的數據類型
  //   }

  //   axios(config);
  // });

  // async function fetch_data() {
  //   const config = {
  //     url: 'http://127.0.0.1:8000/api/',  // 只有此為必需
  //     method: 'get', // 大小寫皆可
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Headers':'*',
  //       'X-Requested-With':'XMLHttpRequest',
  //     },
  //     responseType: 'json', // 伺服器回應的數據類型
  //   }
  //   try {
  //     axios(config)
  //     .then(res =>{
  //       console.log(res)
  //       setPosts(res.data)
  //     },[]);
  //   }
  //   catch (error) {
  //     throw error;
  //     // Do  with error
  //   }
  // }

  // this.state = {
  //     posts: [],
  //     DataisLoaded: false
  // };
  const baseURL = "http://127.0.0.1:8000/";

  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    // fetch_data()
    const token = localStorage.getItem("token");
    const config = {
      url: "http://127.0.0.1:8000/api/", // 只有此為必需
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
        // console.log(res.data.req)
        setPosts(res.data.req);
      }, []);
    } catch (error) {
      throw error;
      // Do  with error
    }
  }, []);
  console.log("posts=>", posts);
  console.log("-------------------");

  // useEffect(()=>{
  //   console.log("123");
  //   fetch('http://127.0.0.1:8000/api/',
  //   {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Headers': '*',
  //       'Access-Control-Allow-Methods': '*'}
  //   }, {mode:'cors'})
  //   .then(res =>{
  //     console.log(res)
  //     setPosts(res.data)
  //   },[])
  // })

  return (
    // <div>

    // </div>
    <div id="Home">
      <Row className="containter">
        <Col span={16}>
          <div className="Carousel">
            <div className="Carouselson">
              <Slider {...autoplay}>
                <div className="autoblock">
                  <img src={images.auto1} />
                </div>
                <div className="autoblock">
                  <img src={images.auto2} />
                </div>
                <div className="autoblock">
                  <img src={images.auto3} />
                </div>
              </Slider>
            </div>
          </div>
          <div className="Chooseall">
            <Row className="Choosemain">
              <Col xs={24} md={11} className="Choose">
                <div className="title">
                  <h1 style={{ color: "#FF6B6B" }}>飼主體驗</h1>
                </div>
                <span>
                  <h2>
                    飼主體驗主要分為兩大專區，體驗者專區是讓使用者體驗當期間性的飼主，可以讓猶豫養寵物、或是有其他需求的使用者藉此享受養寵物的樂趣，也能評估往後養寵物的意願。
                  </h2>
                </span>
                <a href="Experience">
                  <ButtonComponent text="前往體驗" size="large" name="pet" />
                </a>
              </Col>
              <Col xs={24} md={11} className="Choose">
                <div className="title">
                  <h1 style={{ color: "rgba(251, 213, 52, 0.94)" }}>
                    寵物共養
                  </h1>
                </div>
                <span>
                  <h2>
                    寵物共養提供給想繼續飼養寵物，但一個人飼養上可能會有金錢或時間的負擔時，可以找到也有興趣的人一起飼養一隻寵物，這樣就可以一起分擔，且寵物在任何時間都可被照顧到。
                  </h2>
                </span>
                <a href="Share-already">
                  <ButtonComponent
                    text="前往共養"
                    size="large"
                    name="together"
                  />
                </a>
              </Col>
            </Row>
          </div>
          <Col span={24} className="title">
            <h1>飼主體驗評論</h1>
          </Col>
          <div className="Comment">
            <Slider {...settings}>
              {posts.map((post, index) => {
                return (
                  <Col className="Commentcard" key={index}>
                    <Row className="bannerBlock">
                      <Col span={16} className="pictureBlock">
                        <div className="imgBlock">
                          <img src={baseURL + post.img} />
                        </div>
                      </Col>
                      <Col span={16} className="titleBlock">
                        <span className="nametotal">
                          <h1 className="petname">
                            <strong>{post.petName}</strong>
                          </h1>
                          <div className="area icon">
                            <EnvironmentOutlined />
                            <span>{post.locations}</span>
                          </div>
                        </span>
                        <span className="introduce">
                          <div style={{ textAlign: "justify" }}>
                            {post.comment}
                          </div>
                          <div className="userName">— {post.userName}</div>
                        </span>
                      </Col>
                      <Col span={16} className="area"></Col>
                    </Row>
                  </Col>
                );
              })}
            </Slider>
          </div>
          <div className="Idea">
            <Row>
              <Col span={24} className="title">
                <h1>我們的理念</h1>
              </Col>
              <Col span={24} className="introduce">
                <Row className="bannerBlock">
                  <Col sm={24} md={12}>
                    <div className="imgBlock">
                      <img src={images.gold} />
                    </div>
                  </Col>
                  <Col sm={24} md={12} className="titleBlock">
                    <span level={windowSize.width < 576 ? 4 : 2}>
                      <h1>
                        <strong>
                          本平台提供飼主體驗與寵物共養兩大功能，幫助想養寵物的人提供完善的媒合，達成雙方的進而達到降低棄養的機率
                        </strong>
                      </h1>
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;

// function Index(props) {

//   const success = () => {
//     message.success("預約成功");
//   };
//   const warning = () => {
//     message.warning('滾出去');
//   };
//   return (
//     <div>
//       <ButtonComponent
//         text="立即預約"
//         size="large"
//         handleSubmit={success}
//       />
//       <ButtonComponent
//         text="退出頁面"
//         size="large"
//         handleSubmit={warning}
//       />
//     </div>

//   )
// }

