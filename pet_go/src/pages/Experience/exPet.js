import { Col, Row, message, Space, Card, DatePicker, Select, Form } from "antd";
import ButtonComponent from "../../components/button/button";
import CardComponent from "../../components/card/card";
import { EnvironmentOutlined } from "@ant-design/icons";
import "./exPet.less";
import images from "../../config/images";

import CardComponent2 from "../../components/card/cardEX";

import React, { useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";
const { Meta } = Card;

/*體驗者專區-首頁-有狗狗*/
function ExPet() {
  const check = () => {
    message.check("查看");
  };

  const { Option } = Select;

  const provinceData = [
    "台北市",
    "基隆市",
    "新北市",
    "宜蘭縣",
    "桃園市",
    "新竹市",
    "新竹縣",
    "苗栗縣",
    "台中市",
    "彰化縣",
    "南投縣",
    "嘉義市",
    "嘉義縣",
    "雲林縣",
    "台南市",
    "高雄市",
    "澎湖縣",
    "金門縣",
    "屏東縣",
    "台東縣",
    "花蓮縣",
    "連江縣",
  ];
  const cityData = {
    台北市: [
      "中正區",
      "大同區",
      "中山區",
      "松山區",
      "大安區",
      "萬華區",
      "信義區",
      "士林區",
      "北投區",
      "內湖區",
      "南港區",
      "文山區",
    ],
    基隆市: [
      "仁愛區",
      "信義區",
      "中正區",
      "中山區",
      "安樂區",
      "暖暖區",
      "七堵區",
    ],
    新北市: [
      "萬里區",
      "金山區",
      "板橋區",
      "汐止區",
      "深坑區",
      "石碇區",
      "瑞芳區",
      "平溪區",
      "雙溪區",
      "貢寮區",
      "新店區",
      "坪林區",
      "烏來區",
      "永和區",
      "中和區",
      "土城區",
      "三峽區",
      "樹林區",
      "鶯歌區",
      "三重區",
      "新莊區",
      "泰山區",
      "林口區",
      "蘆洲區",
      "五股區",
      "八里區",
      "淡水區",
      "三芝區",
      "石門區",
    ],
    宜蘭縣: [
      "宜蘭市",
      "頭城鎮",
      "礁溪鄉",
      "壯圍鄉",
      "員山鄉",
      "羅東鎮",
      "三星鄉",
      "大同鄉",
      "五結鄉",
      "冬山鄉",
      "蘇澳鎮",
      "南澳鄉",
      "釣魚台列嶼",
    ],
    桃園市: [
      "中壢區",
      "平鎮區",
      "龍潭區",
      "楊梅區",
      "新屋區",
      "觀音區",
      "桃園區",
      "龜山區",
      "八德區",
      "大溪區",
      "復興區",
      "大園區",
      "蘆竹區",
    ],
    新竹市: ["東區", "北區", "香山區"],
    新竹縣: [
      "竹北市",
      "湖口鄉",
      "新豐鄉",
      "新埔鎮",
      "關西鎮",
      "芎林鄉",
      "寶山鄉",
      "竹東鎮",
      "五峰鄉",
      "橫山鄉",
      "尖石鄉",
      "北埔鄉",
      "峨眉鄉",
    ],
    苗栗縣: [
      "竹南鎮",
      "頭份市",
      "三灣鄉",
      "南庄鄉",
      "獅潭鄉",
      "後龍鎮",
      "通霄鎮",
      "苑裡鎮",
      "苗栗市",
      "造橋鄉",
      "頭屋鄉",
      "公館鄉",
      "大湖鄉",
      "泰安鄉",
      "銅鑼鄉",
      "三義鄉",
      "西湖鄉",
      "卓蘭鎮",
    ],
    台中市: [
      "中區",
      "東區",
      "南區",
      "西區",
      "北區",
      "北屯區",
      "西屯區",
      "南屯區",
      "太平區",
      "大里區",
      "霧峰區",
      "烏日區",
      "豐原區",
      "后里區",
      "石岡區",
      "東勢區",
      "和平區",
      "新社區",
      "潭子區",
      "大雅區",
      "神岡區",
      "大肚區",
      "沙鹿區",
      "龍井區",
      "梧棲區",
      "清水區",
      "大甲區",
      "外埔區",
      "大安區",
    ],
    彰化縣: [
      "彰化市",
      "芬園鄉",
      "花壇鄉",
      "秀水鄉",
      "鹿港鎮",
      "福興鄉",
      "線西鄉",
      "和美鎮",
      "伸港鄉",
      "員林市",
      "社頭鄉",
      "永靖鄉",
      "埔心鄉",
      "溪湖鎮",
      "大村鄉",
      "埔鹽鄉",
      "田中鎮",
      "北斗鎮",
      "田尾鄉",
      "埤頭鄉",
      "溪州鄉",
      "竹塘鄉",
      "二林鎮",
      "大城鄉",
      "芳苑鄉",
      "二水鄉",
    ],
    南投縣: [
      "南投市",
      "中寮鄉",
      "草屯鎮",
      "國姓鄉",
      "埔里鎮",
      "仁愛鄉",
      "名間鄉",
      "集集鎮",
      "水里鄉",
      "魚池鄉",
      "信義鄉",
      "竹山鎮",
      "鹿谷鄉",
    ],
    嘉義市: ["東區", "西區"],
    嘉義縣: [
      "番路鄉",
      "梅山鄉",
      "竹崎鄉",
      "阿里山",
      "中埔鄉",
      "大埔鄉",
      "水上鄉",
      "鹿草鄉",
      "太保市",
      "朴子市",
      "東石鄉",
      "六腳鄉",
      "新港鄉",
      "民雄鄉",
      "大林鎮",
      "溪口鄉",
      "義竹鄉",
      "布袋鎮",
    ],
    雲林縣: [
      "斗南鎮",
      "大埤鄉",
      "虎尾鎮",
      "土庫鎮",
      "褒忠鄉",
      "東勢鄉",
      "台西鄉",
      "崙背鄉",
      "麥寮鄉",
      "斗六市",
      "林內鄉",
      "古坑鄉",
      "莿桐鄉",
      "西螺鎮",
      "二崙鄉",
      "北港鎮",
      "水林鄉",
      "口湖鄉",
      "四湖鄉",
      "元長鄉",
    ],
    台南市: [
      "中西區",
      "東區",
      "南區",
      "北區",
      "安平區",
      "安南區",
      "永康區",
      "歸仁區",
      "新化區",
      "左鎮區",
      "玉井區",
      "楠西區",
      "南化區",
      "仁德區",
      "關廟區",
      "龍崎區",
      "官田區",
      "麻豆區",
      "佳里區",
      "西港區",
      "七股區",
      "將軍區",
      "學甲區",
      "北門區",
      "新營區",
      "後壁區",
      "白河區",
      "東山區",
      "六甲區",
      "下營區",
      "柳營區",
      "鹽水區",
      "善化區",
      "大內區",
      "山上區",
      "新市區",
      "安定區",
    ],
    高雄市: [
      "新興區",
      "前金區",
      "苓雅區",
      "鹽埕區",
      "鼓山區",
      "旗津區",
      "前鎮區",
      "三民區",
      "楠梓區",
      "小港區",
      "左營區",
      "仁武區",
      "大社區",
      "東沙群島",
      "南沙群島",
      "岡山區",
      "路竹區",
      "阿蓮區",
      "田寮區",
      "燕巢區",
      "橋頭區",
      "梓官區",
      "彌陀區",
      "永安區",
      "湖內區",
      "鳳山區",
      "大寮區",
      "林園區",
      "鳥松區",
      "大樹區",
      "旗山區",
      "美濃區",
      "六龜區",
      "內門區",
      "杉林區",
      "甲仙區",
      "桃源區",
      "那瑪夏區",
      "茂林區",
      "茄萣區",
    ],
    澎湖縣: ["馬公市", "西嶼鄉", "望安鄉", "七美鄉", "白沙鄉", "湖西鄉"],
    金門縣: ["金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉", "烏坵鄉"],
    屏東縣: [
      "屏東市",
      "三地門鄉",
      "霧台鄉",
      "瑪家鄉",
      "九如鄉",
      "里港鄉",
      "高樹鄉",
      "鹽埔鄉",
      "長治鄉",
      "麟洛鄉",
      "竹田鄉",
      "內埔鄉",
      "萬丹鄉",
      "潮州鎮",
      "泰武鄉",
      "來義鄉",
      "萬巒鄉",
      "崁頂鄉",
      "新埤鄉",
      "南州鄉",
      "林邊鄉",
      "東港鎮",
      "琉球鄉",
      "佳冬鄉",
      "新園鄉",
      "枋寮鄉",
      "枋山鄉",
      "春日鄉",
      "獅子鄉",
      "車城鄉",
      "牡丹鄉",
      "恆春鎮",
      "滿州鄉",
    ],
    台東縣: [
      "台東市",
      "綠島鄉",
      "蘭嶼鄉",
      "延平鄉",
      "卑南鄉",
      "鹿野鄉",
      "關山鎮",
      "海端鄉",
      "池上鄉",
      "東河鄉",
      "成功鎮",
      "長濱鄉",
      "太麻里",
      "金峰鄉",
      "大武鄉",
      "達仁鄉",
    ],
    花蓮縣: [
      "花蓮市",
      "新城鄉",
      "秀林鄉",
      "吉安鄉",
      "壽豐鄉",
      "鳳林鎮",
      "光復鄉",
      "豐濱鄉",
      "瑞穗鄉",
      "萬榮鄉",
      "玉里鎮",
      "卓溪鄉",
      "富里鄉",
    ],
    連江縣: ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"],
  };

  const baseURL = "http://127.0.0.1:8000/";

  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  const [exs, setExs] = useState([]);
  const [varieties, setVarieties] = useState([]);
  React.useEffect(() => {
    // fetch_data()

    const config = {
      url: "http://127.0.0.1:8000/api/experience/experiencer-illustrate/card", // 只有此為必需
      method: "get", // 大小寫皆可
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "X-Requested-With": "XMLHttpRequest",
      },
      responseType: "json", // 伺服器回應的數據類型
    };

    try {
      axios(config).then((res) => {
        console.log(res.data.experiences);
        setExs(res.data.experiences);
        console.log(res.data.varieties);
        setVarieties(res.data.varieties);
      }, []);
    } catch (error) {
      throw error;
      // Do  with error
    }
  }, []);
  // console.log('posts=>', posts);
  // console.log('post=>', post);

  return (
    <div id="ExPet">
      <Row className="exFilter">
        <Col md={24}>
          <Row align="middle">
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <h2>篩選</h2>
            </Col>
          </Row>

          <Form className="searchFrom">
            <Row type="flex" justify="start" align="middle">
              <Col
                className="searchFromItem"
                xl={4}
                lg={5}
                md={7}
                sm={12}
                xs={12}
              >
                <Form.Item label="日期" name="date" colon={false}>
                  <DatePicker type={"date"} placeholder="請選擇日期" />
                </Form.Item>
              </Col>

              <Col
                className="searchFromItem"
                xl={5}
                lg={7}
                md={8}
                sm={12}
                xs={12}
              >
                <Form.Item label="地區" name="Area" colon={false}>
                  <Select
                    className="AreaSelect"
                    defaultValue={provinceData[0]}
                    onChange={handleProvinceChange}
                  >
                    {provinceData.map((province) => (
                      <Option key={province}>{province}</Option>
                    ))}
                  </Select>

                  <Select value={secondCity} onChange={onSecondCityChange}>
                    {cities.map((city) => (
                      <Option key={city}>{city}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col
                className="searchFromItem"
                xl={4}
                lg={5}
                md={7}
                sm={12}
                xs={12}
              >
                <Form.Item label="品種" name="variety" colon={false}>
                  <Select
                    showSearch
                    className="varietyWarp"
                    value="品種"
                    placeholder="品種"
                  >
                    {varieties.map((variety, index) => (
                      <Option key={index}>{variety.variety}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col
                className="searchFromItem"
                xl={1}
                lg={2}
                md={24}
                sm={24}
                xs={24}
              >
                <Form.Item colon={false}>
                  <Row justify="start">
                    <Col md={24}>
                      <ButtonComponent text="查詢" name="search" />
                    </Col>
                  </Row>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      <Row justify="start">
        {exs.map((ex, index) => {
          return (
            <Col
              xl={6}
              lg={8}
              md={12}
              sm={12}
              xs={24}
              className="exCards"
              key={index}
            >
              <CardComponent2
                name="card .ant-card-body"
                img={<img alt="pet" src={baseURL + ex.img} />}
                // img={<img alt="pet" src={images.expet}}
                title={<h1>{ex.name}</h1>}
                icon={
                  <h1>
                    <EnvironmentOutlined />
                    {ex.locations}
                  </h1>
                }
                text={
                  <div>
                    <h4>品種：{ex.variety}</h4>
                    <h4>年齡：{ex.age}</h4>
                    <h4>體型：{ex.size}</h4>
                    <h4>性別：{ex.sex}</h4>
                    <h4>體驗日期:</h4>
                    <h4>
                      {ex.start_date} ～ {ex.end_date}
                    </h4>
                  </div>
                }
                btn={
                  <a
                    href={
                      "/experience/experiencer-illustrate/card/ex-pet-detail/" +
                      ex.id
                    }
                  >
                    <ButtonComponent
                      text="查看"
                      name="exPetCheckBtn"
                      handleSubmit={check}
                    />
                  </a>
                }
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
export default ExPet;
