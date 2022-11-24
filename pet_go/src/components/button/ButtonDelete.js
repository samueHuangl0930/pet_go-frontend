
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import React from 'react';

function ButtonDelete(props) {
  const { text, size, name, handleSubmit, htmlType } = props;
  const { confirm } = Modal;
  const navigate = useNavigate();

  const showDeleteConfirm = () => {
    confirm({
      title: '確定要取消請求嗎?',
      icon: <ExclamationCircleOutlined />,
      okText: '確定',
      okType: 'danger',
      cancelText: '取消',
      onOk() {
        navigate('/sert-request');
      },
      onCancel() {
        navigate('/sent-nequest');
      },
    });
  };
  
  return (
    <Space wrap>
    
    <Button onClick={showDeleteConfirm} type="dashed" size={size} className={name}  htmlType={htmlType} >
      {text}
    </Button>
    
  </Space>
  );
}

export default ButtonDelete;
