import React from "react";
import { Col,Row ,message,Space,Card} from "antd";
import ButtonComponent from "../../components/button/button";
import CardComponent from "../../components/card/card";
import {EnvironmentOutlined} from '@ant-design/icons';
import { GiPlainCircle } from "react-icons/gi";
import './adoptionNotYet.less';
import images from "../../config/images";

const { Meta } = Card;


/*已有共養人-首頁*/
function AdoptionNotYet() {
    const goPage=() =>{
        this.props.history.push("/Share-already/share-pet-detail");
    };
    const check = () => {
        message.check("查看");
    };

    return (
        <div id="adoptionNotYet">
            <Row type="flex">
                <Col span={24} className="exFilter">
                    <Row type="flex">
                        <Col span={15} className="trimFilter">
                            <h2>
                                <select style={{width:"200px"}}>
                                    <option>縣市</option>                       
                                </select>
                            </h2>
                            <h2>
                                <select style={{width:"200px"}}>
                                    <option>地區</option>                      
                                </select>
                            </h2>
                            <h2>
                                <select style={{width:"200px"}}>
                                    <option>品種</option>                      
                                </select>
                            </h2>
                        </Col>
                    </Row> 
                    <Row className="trimShareBtn">
                        <Col span={20} className="trimSearchBtn">
                            <ButtonComponent
                                text="尋找共養者"                    
                                name="searchMemberBtn"
                            />
                        </Col>
                        <Col span={24} className="shareBtn">
                            <Row>
                                <a href="Share-already">
                                    <ButtonComponent
                                        text="已有共養人"                    
                                        name="alreadyBtn2"
                                    />
                                </a>
                                
                            </Row>
                            
                            <Row>
                                <ButtonComponent
                                    text="未有共養人"                    
                                    name="notYetBtn2"
                                />
                            </Row>
                            
                        </Col>
                    </Row>                   
                </Col>
                 
            </Row>
            <Row justify="center">
                <Col span={19} className="exCards">
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<a href="Share-already/share-pet-detail">
                                <ButtonComponent
                                text="查看"                    
                                name="adoptionCheckBtn"
                                handleSubmit={goPage}/></a>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<a href="Share-already/share-pet-detail">
                                <ButtonComponent
                                text="查看"                    
                                name="adoptionCheckBtn"
                                handleSubmit={goPage}/></a>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<a href="Share-already/share-pet-detail">
                                <ButtonComponent
                                text="查看"                    
                                name="adoptionCheckBtn"
                                handleSubmit={goPage}/></a>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<a href="Share-already/share-pet-detail">
                                <ButtonComponent
                                text="查看"                    
                                name="adoptionCheckBtn"
                                handleSubmit={goPage}/></a>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<a href="Share-already/share-pet-detail">
                                <ButtonComponent
                                text="查看"                    
                                name="adoptionCheckBtn"
                                handleSubmit={goPage}/></a>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<a href="Share-already/share-pet-detail">
                                <ButtonComponent
                                text="查看"                    
                                name="adoptionCheckBtn"
                                handleSubmit={goPage}/></a>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<a href="Share-already/share-pet-detail">
                                <ButtonComponent
                                text="查看"                    
                                name="adoptionCheckBtn"
                                handleSubmit={goPage}/></a>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<a href="Share-already/share-pet-detail">
                                <ButtonComponent
                                text="查看"                    
                                name="adoptionCheckBtn"
                                handleSubmit={goPage}/></a>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                    <CardComponent                                                
                        name="adoptionCard .ant-card-body"  
                        img={<img alt="pet" src={images.expet} />}
                        // img={<img alt="pet" src={images.expet}}  
                        title={<h1>阿金</h1>} 
                        icon={<h1><EnvironmentOutlined />台中，大里</h1>}
                        text={<div>
                                <h4>品種：拉不拉多</h4>
                                <h4>年齡：5</h4>
                                <h4>體型：大型</h4>
                                <h4>性別：女</h4>
                            </div>
                        }     
                        btn={<a href="Share-already/share-pet-detail">
                                <ButtonComponent
                                text="查看"                    
                                name="adoptionCheckBtn"
                                handleSubmit={goPage}/></a>
                        }
                        light={<h1><GiPlainCircle /><GiPlainCircle /><GiPlainCircle /></h1>}
                        
                    />
                </Col>
            </Row>




            
                        


        </div>
    );
}
export default AdoptionNotYet;