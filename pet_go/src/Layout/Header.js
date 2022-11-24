import React, { useState } from "react";
import { Dropdown, Layout, Menu, Avatar, Button, Drawer, Link } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./GloballLayout.less";
import images from "../config/images";
import {
  FaUserAlt,
  FaEdit,
  FaCog,
  FaElementor,
  FaSignInAlt,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const { Header } = Layout;
console.log('Header進入');
function HeaderComponent(props) {
  const { windowSize } = props;
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const activityMenu = (
    <Menu
      className="activityMenu"
      items={[
        {
          label: <a href="/Record/Experience/list">體驗紀錄</a>,
          key: "experiencerecord",
        },
        {
          label: <a href="/Record/Share/list">共養紀錄</a>,
          key: "breedrecord",
        },
        {
          label: <a href="/Record/DoingShare/list">正在共養</a>,
          key: "breeding",
        },
      ]}
    />
  );
  const requestMenu = (
    <Menu
      className="requestMenu"
      items={[
        {
          label: <a href="/sent-request">我送出的請求</a>,
          key: "send",
        },
        {
          label: <a href="/Receive-request">我收到的請求</a>,
          key: "receive",
        },
      ]}
    />
  );

  const userMenu = (
    <Menu
      className="userDropdown"
      items={[
        {
          icon: <FaEdit />,
          label: <a href="/member">會員資料</a>,
          key: "memberprofile",
        },
        {
          icon: <FaElementor />,
          label: <a href="/pet-list">寵物清單</a>,
          key: "pet-list",
        },
        {
          icon:
            localStorage.getItem("token") === null ? (
              <FaSignInAlt />
            ) : (
              <FaSignOutAlt />
            ),
          label: (
            <a href="/login">
              {localStorage.getItem("token") === null ? "登入" : "登出"}
            </a>
          ),
          key: "signin",
        },
      ]}
    />
  );
  const items = [
    {
      label: <a href="/Experience">飼主體驗</a>,
      key: "breeder",
    },
    {
      label: <a href="/Share-already">寵物共養</a>,
      key: "pettogether",
    },
    {
      label: (
        <Dropdown overlay={activityMenu} className="activityMenu">
          <a onClick={(e) => e.preventDefault()}>活動紀錄</a>
        </Dropdown>
      ),
      key: "activity record",
    },
    {
      label: <a href="/comment">我的評論</a>,
      key: "Comment",
    },
    {
      label: (
        <Dropdown overlay={requestMenu} className="requestMenu">
          <a onClick={(e) => e.preventDefault()}>我的請求</a>
        </Dropdown>
      ),
      key: "request",
    },
  ];
  function getItem(label, key, children, type) {
    return {
      key,
      children,
      label,
      type,
    };
  }

  const dropdownitems = [
    getItem(  <a href="/Experience">飼主體驗</a>, "sub1"),
    getItem(<a href="/Share-already">寵物共養</a>, "sub2"),
    getItem("活動紀錄", "sub3", [
      getItem(<a href="/Record/Experience/list">體驗紀錄</a>),
      getItem(<a href="/Record/Share/list">共養紀錄</a>),
      getItem(<a href="/Record/DoingShare/list">正在共養</a>),
    ]),
    getItem(<a href="/comment">我的評論</a>, "sub4"),
    getItem("我的請求", "sub5", [
      getItem(<a href="/sent-request">我送出的請求</a>),
      getItem(<a href="/Receive-request">我收到的請求</a>),
    ]),
  ];
  return (
    <div className="header">
      <Header>
        <a href="/" className="logoBlock">
          <img
            src={images.logo}
            alt="logo"
            width={200}
            height={60}
            className="logoImage"
          />
        </a>

        <Menu mode="horizontal" items={items} className="menuBar" />
        <Dropdown overlay={userMenu} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Avatar size={36} icon={<FaUserAlt />} />
          </a>
        </Dropdown>
        <Button
          type="primary"
          onClick={showDrawer}
          className={windowSize.width > 992 ? "hide barIcon" : "show barIcon"}
        >
          <FaBars />
        </Button>
        <Drawer
          title={
            <Avatar size={36} icon={<FaUserAlt width={40} height={40} />} />
            
          }
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical" items={dropdownitems} />
          {/* <Menu mode="vertical" items={ items } className="menuBarList" /> */}
        </Drawer>
      </Header>
    </div>
  );
}

export default HeaderComponent;
