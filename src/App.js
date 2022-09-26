import { useState,useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
// import Web3 from 'web3';
import './App.css';
function App() {
  // const [web3api,setWeb3Api]=useState({
  //   provider: null,
  //   web3:null
  // });
  // useEffect(()=>{
  //   const loadProvider=async ()=>{
  //     const provider=null;
  //     if(provider){
  //       setWeb3Api({
  //         web3: new Web3(provider),
  //         provider
  //       })
  //     }else{
  //       alert("error... connect metamask !!!")
  //     }
  //   }
  // },[])
  return (
    <div className="App">
      <div className="flex">
        Curent - view: <span className="text">10 eth</span>
        <div className="">
          <button className="button__donate">Donate</button>
          <button className="button__withdraw">Withdraw</button>
        </div>
      </div>
    </div>
  );
}

export default App;
