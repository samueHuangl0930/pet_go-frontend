import React from "react";
import { Col, Row, message } from "antd";
import ButtonComponent from "../../components/button/button";
import ButtonDelete from "../../components/button/ButtonDelete";
import "./owner.less";
import images from "../../config/images";

function OwnerNoPet() {
    // const add = () => {
    //     message.add("新增寵物成功");
    // };
    // const del = () => {
    //     message.del("確定移除寵物？");
    // };
    // const check = () => {
    //     message.check("確定移除寵物？");
    // };

    // return (
    //     <div className="container">
    //         <Row justify="center">
    //             <Col span={20} className="havePet">
    //                 <Col span={22} className="title">
    //                     <div style={{width:"100px"}}></div>
    //                     <h1>現有的體驗寵物</h1>
    //                     <ButtonComponent
    //                         text="新增寵物"
    //                         size="large"
    //                         name="addExPet"
    //                         handleSubmit={add}
    //                     />
    //                 </Col>
    //                 <Col span={8} className="noPet">
    //                     <p>尚未新增寵物</p>
    //                 </Col>
    //             </Col>
    //         </Row>
    //     </div>
    // );
    const add = () => {
        message.add("新增寵物成功");
    };
    const del = () => {
        message.del("確定移除寵物？");
    };
    const check = () => {
        message.check("確定移除寵物？");
    };

    return (
        <div id="owner">
            <Row type="flex" justify="center" align="middle">
                <Col
                    xxl={14}
                    xl={16}
                    lg={18}
                    md={18}
                    sm={20}
                    xs={22}
                    className="RecordListwarp"
                >
                    <Row type="flex" justify="center">
                        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                            <div className="topWarp">
                                <p className="RecordListTitle">現有的體驗寵物</p>

                                <div className="addExPetWarp">
                                    <a href="/Experience/owner-illustrate/post/add-form">
                                        <ButtonComponent
                                            text="新增寵物"
                                            size="large"
                                            name="addExPet"
                                        />
                                    </a>
                                </div>
                            </div>
                            <Row type="flex" justify="center">
                                <Col
                                    xl={18}
                                    lg={19}
                                    md={20}
                                    sm={20}
                                    xs={22}
                                    className="NoPetList"
                                >
                                    <h1>尚未新增寵物</h1>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default OwnerNoPet;
