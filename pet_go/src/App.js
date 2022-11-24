import React,{ useState,useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import "./App.less";
import Test from "./components/test";
import Router from "./pages/router";
import Home from "./pages/Home";

var cookies = document.cookie;
console.log(cookies);
console.log('App進入');
function App() {
  console.log('App內部進入');
  // async function fetch_data() {
  //   const config = {
  //     url: 'http://127.0.0.1:8000/api/',  // 只有此為必需
  //     method: 'get', // 大小寫皆可
  //     headers: { 
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Headers':'*',
  //       'X-Requested-With':'XMLHttpRequest',
  //     },
  //     responseType: 'json', // 伺服器回應的數據類型
  //   }
  //   try {
  //     axios(config);
  //   }
  //   catch (error) {
  //     throw error;
  //     // Do  with error
  //   }
  // }

  // React.useEffect(() => {
  //   fetch_data()
    // axios
    //     .get('http://127.0.0.1:8000/api/')
    //     .set('Access-Control-Allow-Origin','*',
    //         'Access-Control-Allow-Headers', '*',
    //         'X-Requested-With','XMLHttpRequest',
    //         'Access-Control-Allow-Methods', '*',)
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
  // });

  // useEffect(()=>{
  //   console.log("123");
  //   const response = fetch('http://127.0.0.1:8000/api/', 
  //   {
  //     method: '*', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Headers': '*',
  //       'Access-Control-Allow-Methods': '*',
  //       'X-Requested-With': 'XMLHttpRequest',
  //     },
  //   }
  //   )
  //   .then(res =>{
  //     console.log(res)
  //   },[]);
    
    // fetch('http://127.0.0.1:8000/api/',{
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': '*',
    //     'Access-Control-Allow-Methods': '*',
    //     'X-Requested-With': 'XMLHttpRequest',
    //   },
    //   mode:'cors'
    // })
    // .then(res =>{
    //   console.log(res)
    // },[]);
  // });


  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8000/api', {mode:'cors'});
  //     const data = await response.json();
  //     console.log({ data })
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }
  // useEffect(() => {
  //   makeAPICall();
  // }, [])

  // axios.get('/cors', (req, res) => {
  //   res.set('Access-Control-Allow-Origin', '*');
  //   res.send({ "msg": "This has CORS enabled " })
  //   })


  // return(
  //   <div>nothing</div>
  // );
  return <Router />;
}

export default App;