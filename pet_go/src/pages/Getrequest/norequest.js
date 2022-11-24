import React from 'react';
import { Row, Col} from 'antd';
import './norequest.less'


function Comment() {

    return (
        <div id='Norequest'>
            <Row align='center' className='container'>
                <Col span={15} className='Commentlist'>
                    <Row className='Commentlistrow'>
                        <div className='Commenttitle'>
                            <h1>我收到的請求</h1>
                        </div>
                        <Col span={24} className='commentary'>
                        <h1>尚未收到請求</h1>
                        </Col>

                    </Row>

                </Col>
            </Row>
        </div>

    )

}

export default Comment;


