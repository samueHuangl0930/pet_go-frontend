
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import React from 'react';

function ButtonAdd(props) {
  const { text, size, name, handleSubmit, htmlType } = props;
  const { confirm } = Modal;
  const navigate = useNavigate();

  const showConfirm = () => {
    confirm({
      title: '確定要接受請求嗎?',
      icon: <ExclamationCircleOutlined />,
      content: '可以先查看詳細呦~',
      onOk() {
        navigate('/');
      },
      onCancel() {
        navigate('/sent-request');
      },
    });
  };
  
  return (
    <Space wrap>
    
    <Button onClick={showConfirm} type="dashed" size={size} className={name}  htmlType={htmlType} >
      {text}
    </Button>
    
  </Space>
  );
}

export default ButtonAdd;
