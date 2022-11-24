import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./GlobalLayout.less";
import HeaderComponent from "./header";
import Footer from "./Footer";

const { Content } = Layout;

const LayoutWithRoute = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout id="global">
      <HeaderComponent windowSize={windowSize} />
      <Content>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        &copy; Xiao Lab React Project By QQ DD TT
      </Footer>
    </Layout>
  );
};

export default LayoutWithRoute;
