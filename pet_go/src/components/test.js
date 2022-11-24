import React,{useState,useEffect} from "react";
import axios from "axios";

function Test() {
    const _axios=axios.create({

    baseURL:"http://127.0.0.1:8000/",
    timeout:"3000",
    headers:{
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Requested-With':'XMLHttpRequest',
        'Access-Control-Allow-Origin':'*'
    },
    withCredentials:true,
})
    const [posts,setPosts]=useState([])

    useState(() =>{
        console.log("123");
        
        // http.get("http://localhost:8000/")
        // .then(res=>{
        //     console.log(res);
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        _axios.get("http://127.0.0.1:8000/",{
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'Origin, Methods, Content-Type, Authorization',
                'Access-Control-Allow-Methods':'*',
                'X-Requested-With':'XMLHttpRequest',
                'Content-Type': 'application/json;charset=UTF-8',
            },withCredentials:true,
        })
        .then(res =>{
            console.log(res)
            
        })
        .catch(err =>{
            console.log(err)
        })
    })
    return (
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
            </ul>
        </div>
    );
}

export default Test;