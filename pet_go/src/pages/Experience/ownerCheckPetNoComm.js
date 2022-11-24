import React from "react";
import { Col,Row ,message,Space} from "antd";
import ButtonComponent from "../../components/button/button";
// import './owner.less'
import './ownerCheckPet.less'
import images from "../../config/images";


/*飼主專區-寵物詳細資料-無評論*/
function OwnerCheckPet() {

    return (
        <div id="OwnerCheckPet">
          <Row  type="flex" justify="center" align="middle">
               <Col className="DoingShareDetailedWarp" lg={16} md={18} sm={20} xs={22} >
               <Row
                              className="PetListDetail"
                              type="flex"
                              justify="center"
                            >
                              <Col   >
                                <Row type="flex" justify="center" align="top" >
                                  <Col xl={10} md={8} sm={24} xs={24} className="DetailedJmimgWarp" >
                                    <div className="DetailedJmimgWarp">
                                    <img
                                      className="DetailedJmimg"
                                      src={images.jm}
                                    /></div>
                                  </Col>

                                  <Col xl={14} md={14} sm={18} xs={22} >
                                    <Row type="flex" align="top" className="DetailTextRight">
                                      <Col
                                        xl={12}
                                        md={12}
                                        sm={24}
                                        xs={24}
                                        className="DetailTextWarp"
                                      >
                                        <div className="DetailText">
                                          姓名：阿金
                                        </div>
                                        <div className="DetailText">
                                          品種：拉不拉多
                                        </div>
                                        <div className="DetailText">
                                          體型：大
                                        </div>
                                       
                                      </Col>
                                      <Col
                                        xl={12}
                                        md={12}
                                        sm={24}
                                        xs={24}
                                        className="DetailTextWarp"
                                      >
                                         <div className="DetailText">
                                          年齡：5
                                        </div>
                                   
                                        <div className="DetailText">
                                          性別：女
                                        </div>
                                        <div className="DetailText">
                                          絕育狀況：已結紮
                                        </div>
                                      </Col>

                                      <Col span={24}   className="DetailTextWarp">
                                        <div className="DetailText">
                                          飼養期間：2016/08~2016/08
                                        </div>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                                <Row type="flex" align="top"  justify="center" className="PetCardTextDetailbottom">
                                  <Col xl={10}
                                        md={10}
                                        sm={18}
                                        xs={22} >
                                      <div className="DetailTextTitle">個性</div>
                                      <hr></hr>
                                      <p className="DetailText">害羞，內向。是個小公主
                                        同時也是個吃貨，每次吃完都嫌不夠</p>
                                  </Col>
                                  <Col xl={10}
                                        md={10}
                                        sm={18}
                                        xs={22} >
                                      <div className="DetailTextTitle">提醒</div>
                                      <hr></hr>
                                      <p className="DetailText">運動量很大也需要大量的運動</p>
                                  </Col>


                                </Row>

                                <Row type="flex" align="top"  justify="center" className="PetCardTextDetailbottom">
                                  <Col xl={10}
                                        md={10}
                                        sm={18}
                                        xs={22} >
                                      <div className="DetailTextTitle">尋找體驗者的原因</div>
                                      <hr></hr>
                                      <p className="DetailText">那幾天要去玩，希望有個愛狗狗的人可以帶帶</p>
                                  </Col>
                                  <Col xl={10}
                                        md={10}
                                        sm={18}
                                        xs={22} >
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






            <Row justify="center">
                <Col lg={14} md={16} sm={18} xs={20} className="noCommentary">
                    <h1>目前尚無評論</h1>
                </Col>
            </Row>

        </div>
    );
}

export default OwnerCheckPet;