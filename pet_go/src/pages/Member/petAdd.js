import images from "../../config/images";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ButtonComponent from "../../components/button/button";
import {
    Select,
    Col,
    Row,
    Button,
    Form,
    Input,
    Radio,
    DatePicker,
    message,
    Upload,
    Space,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import "./petAdd.less";

function PetAdd() {
    const { RangePicker } = DatePicker;
    let { id } = useParams();

    const [pets, setPets] = useState([]);
    useEffect(() => {
        // fetch_data()

        const csrftoken = {
            url: "http://127.0.0.1:8000/api/csrf_token", // 只有此為必需
            method: "get", // 大小寫皆可
            headers: {
                Accept: "text/html",
                // 'Content-Type': 'text/html; charset=utf-8',
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrftoken"]'),
            },
            responseType: "json", // 伺服器回應的數據類型
        };
        try {
            axios(csrftoken).then((res) => {
                console.log(res, "測試", res.data.csrftoken);
            }, []);
        } catch (error) {
            throw error;
            // Do  with error
        }
        const token = localStorage.getItem("token");
        const config = {
            url: "http://127.0.0.1:8000/api/pet-list/pet-filled/" + id, // 只有此為必需
            method: "get", // 大小寫皆可
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "X-Requested-With": "XMLHttpRequest",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrftoken"]'),
                userToken: `${token}`,
            },
            // responseType: 'json', // 伺服器回應的數據類型
        };
        try {
            axios(config).then((res) => {
                console.log(res.data.req);
                setPets(res.data.req);
            }, []);
        } catch (error) {
            throw error;
            // Do  with error
        }
    }, []);
    console.log("pets=>", pets);
    console.log("-------------------");

    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    const { TextArea } = Input;
    const { Option } = Select;
    const provinceData = [
        "臺北市",
        "基隆市",
        "新北市",
        "宜蘭縣",
        "桃園市",
        "新竹市",
        "新竹縣",
        "苗栗縣",
        "臺中市",
        "彰化縣",
        "南投縣",
        "嘉義市",
        "嘉義縣",
        "雲林縣",
        "臺南市",
        "高雄市",
        "澎湖縣",
        "金門縣",
        "屏東縣",
        "臺東縣",
        "花蓮縣",
        "連江縣",
    ];
    const cityData = {
        臺北市: [
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
        臺中市: [
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
        臺南市: [
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
        臺東縣: [
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

    const [cities, setCities] = useState(cityData[provinceData[0]]);
    const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);

    const handleProvinceChange = (value) => {
        setCities(cityData[value]);
        setSecondCity(cityData[value][0]);
    };

    const onSecondCityChange = (value) => {
        setSecondCity(value);
    };
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }

        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isLt2M) {
            message.error("Image must smaller than 2MB!");
        }

        return isJpgOrPng && isLt2M;
    };

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleChange = (info) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }

        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                上傳圖片
            </div>
        </div>
    );

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log("search:", value);
    };

    return (
        <Row type="flex" justify="center" align="middle">
            <Col
                xl={16}
                lg={18}
                md={20}
                sm={20}
                xs={22}
                type="flex"
                justify="center"
                align="middle"
            >
                <img className="Member1" src={images.pet1} />
                <p className="M-title">寵物資料</p>
            </Col>
            <Col
                xl={16}
                lg={18}
                md={20}
                sm={20}
                xs={22}
                type="flex"
                justify="center"
                align="center"
            >
                <hr></hr>
            </Col>

            <Col
                xl={12}
                lg={16}
                md={20}
                sm={20}
                xs={22}
                className="MemberFormWarp"
                type="flex"
                justify="center"
                align="center"
            >
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row span={24} type="flex" justify="space-between" align="middle">
                        <Col lg={8} md={24} sm={24} xs={24} type="flex" justify="center">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt="avatar"
                                        style={{
                                            width: "100%",
                                        }}
                                    />
                                ) : (
                                    uploadButton
                                )}
                            </Upload>
                        </Col>
                        <Col lg={14} md={24} sm={24} xs={24}>
                            <Row type="flex" align="middle">
                                <Col lg={14} md={14} sm={16} xs={16} className="inputWarp">
                                    <Form.Item
                                        wrapperCol={{
                                            md: 16,
                                            sm: 18,
                                            xs: 2,
                                        }}
                                        label="名字"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: "請輸入名字",
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col lg={10} md={10} sm={8} xs={8}>
                                    <Form.Item
                                        label="性別"
                                        name="sex"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Radio.Group>
                                            <Radio value="男"> 男 </Radio>
                                            <Radio value="女"> 女 </Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row type="flex" align="center">
                                <Col lg={14} md={14} sm={16} xs={16} className="inputWarp">
                                    <Form.Item
                                        wrapperCol={{
                                            md: 16,
                                            sm: 18,
                                            xs: 2,
                                        }}
                                        label="品種"
                                        name="variety"
                                        rules={[
                                            {
                                                required: true,
                                                message: "請輸入品種",
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>

                                <Col lg={10} md={10} sm={8} xs={8}>
                                    <Form.Item
                                        label="年齡"
                                        name="age"
                                        rules={[
                                            {
                                                required: true,
                                            },
                                        ]}
                                    >
                                        <Input
                                            type="text"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Form.Item
                                wrapperCol={{
                                    span: 16,
                                }}
                                label="體型"
                                name="size"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    placeholder="請選擇體型"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().includes(input.toLowerCase())
                                    }
                                >
                                    <Option value="超小型">超小型</Option>
                                    <Option value="小型">小型</Option>
                                    <Option value="中型">中型</Option>
                                    <Option value="大型">大型</Option>
                                    <Option value="中型">超大型</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                wrapperCol={{
                                    span: 13,
                                }}
                                label="開始飼養"
                                name="start_rearing"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                ]}
                            >
                                <DatePicker onChange={onChange} placeholder="選擇日期" />
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                wrapperCol={{
                                    span: 24,
                                }}
                                label="結束飼養"
                                name="end_rearing"
                            >
                                <DatePicker onChange={onChange} placeholder="選擇日期" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Form.Item
                                labelCol={{
                                    span: 24,
                                }}
                                wrapperCol={{
                                    span: 24,
                                }}
                                label="個性(介紹一下毛孩吧)"
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                labelCol={{
                                    span: 24,
                                }}
                                wrapperCol={{
                                    span: 24,
                                }}
                                label="提醒"
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row type="flex" justify="space-between" align="bottom">
                        <Col span={10}>
                            <Form.Item
                                wrapperCol={{
                                    span: 21,
                                }}
                                label="常去的醫院診所"
                            >
                                <Input placeholder="醫院名字" />
                            </Form.Item>
                        </Col>
                        <Col span={14}>
                            <Form.Item
                                wrapperCol={{
                                    span: 24,
                                }}
                            >
                                <Input placeholder="醫院地址" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row type="flex" align="bottom">
                        <Col span={7}>
                            <Form.Item
                                wrapperCol={{
                                    span: 24,
                                }}
                                label="絕育狀況"
                                name="sterilization"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please pick an item!",
                                    },
                                ]}
                            >
                                <Radio.Group>
                                    <Radio value="apple"> 是 </Radio>
                                    <Radio value="pear"> 否</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                wrapperCol={{
                                    span: 21,
                                }}
                                label="緊急聯絡人"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                ]}
                            >
                                <Input placeholder="不能為飼主本人名字" />
                            </Form.Item>
                        </Col>
                        <Col span={9}>
                            <Form.Item
                                wrapperCol={{
                                    span: 24,
                                }}
                            >
                                <Input placeholder="連絡電話" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row
                        span={24}
                        className="buttonWarp"
                        type="flex"
                        justify="space-between"
                        align="middle"
                    >
                        <Col span={11}>
                            <ButtonComponent text="取消" size="large" name="FormCancel " />
                        </Col>
                        <Col span={11}>
                            <ButtonComponent text="儲存" size="large" name="FormSave" />
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    );
}

export default PetAdd;
