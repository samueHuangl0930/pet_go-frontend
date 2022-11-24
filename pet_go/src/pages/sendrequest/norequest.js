import React from 'react';
import ButtonComponent from "../../components/button/button";
import { Row, Col} from 'antd';
import images from '../../config/images';
import './norequest.less'


function Comment() {

    return (
        <div id='Norequest'>
            <Row align='center' className='container'>
                <Col span={15} className='Commentlist'>
                    <Row className='Commentlistrow'>
                        <div className='Commenttitle'>
                            <h1>我送出的請求</h1>
                        </div>
                        <Col span={24} className='commentary'>
                        <h1>尚未送出請求</h1>
                        </Col>

                    </Row>

                </Col>
            </Row>
        </div>

    )

}

export default Comment;


