import React from "react";
import { Button, Modal } from "antd";
import "./button.less";
import { ExclamationCircleOutlined } from '@ant-design/icons';

function ButtonComponent(props) {
    const { text, size, name, handleSubmit ,htmlType} = props;


    return (
        <Button type="primary" size={size} className={name} onClick={handleSubmit} htmlType={htmlType} >
            {text}
        </Button>

    );
}

export default ButtonComponent;