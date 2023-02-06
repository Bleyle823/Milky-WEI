/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

import lighthouse from '@lighthouse-web3/sdk';
export default function Hero() {

   //Lighthouse SDK

   
  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const deploy = async(e) =>{
    // Push file to lighthouse node
    // Both file and folder supported by upload function
    const output = await lighthouse.upload(e, "YOUR_API_KEY", progressCallback);
    console.log('File Status:', output);
    /*
      output:
        {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

      console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
  }



  return (
    <div className="container mx-auto py-10 flex flex-wrap justify-around items-center px-4">
      <div className="max-w-2xl ">
        <div className="text-left">
          <h1 className="font-spartan font-bold text-6xl">
            Buy, Sell and Store{" "}
            <span className="bg-gradient-to-br from-indigo-500  via-purple-500  to-pink-500 bg-clip-text text-transparent ">
              {" "}
              Game Dev
            </span>{" "}
            Assets
          </h1>
          <p className="font-rajdhani font-semibold text-xl">
          
          Welcome to the world of Decentralized Game Assets , the leading platform for tokenizing and trading game developmnent assets and tools.{" "}
          </p>
          <div className="flex flex-around py-10">
            <button className="bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 font-orbitron px-[2.5em] font-bold py-[.7em] rounded-lg">
              Explore
            </button>
            <h1 className="bg-gradient-to-br from-indigo-500  via-purple-500  to-pink-500  font-orbitron px-[2.5em] font-bold py-[.7em] rounded-lg bg-clip-text text-transparent ">
            <div className="App">
      <input onChange={e=>deploy(e)} type="file" />
    </div>
            </h1>
            
          </div>
        </div>
        <>
        <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full   sm:w-12 sm:h-12">
            <img src="/FVM.png" alt="apes" className="Filecoin" />
            </div>
            <h6 className="mb-2 text-sm  leading-5 tracking-wider uppercase">Filecoin</h6>
            
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full   sm:w-12 sm:h-12">
            <img src="/Lighthouse.png" alt="apes" className="Lighthouse" />
            </div>
            <h6 className="mb-2 text-sm  leading-5 tracking-wider uppercase">Lighthouse</h6>
           
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full   sm:w-12 sm:h-12">
            <img src="/Push.png" alt="apes" className="Push" />
            </div>
            <h6 className="mb-2 text-sm  leading-5 tracking-wider uppercase">Push Protocol</h6>
           
          </div>
          <div className="px-12 text-center sm:px-0">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full   sm:w-12 sm:h-12">
            <img src="/Spheron.png" alt="apes" className="Spheron" />
            </div>
            <h6 className="mb-2 text-sm leading-5 tracking-wider uppercase">Spheron</h6>
            
          </div>
        </div>
        </>
      </div>
      <div className="flex-end">
        <img src="/nft.png" alt="apes" className="rounded-3xl" />
        <div className="gradient relative grid grid-cols-2 backdrop-blur-xl -top-20 p-[10px] rounded-lg sm:left-36 left-10 min-h-[10rem] w-[336px] border-1 border">
          <div className="flex flex-col items-center justify-center h-full relative">
            <h1 className="font-rajdhani text-lg font-bold">
              3D Abstract Hand
            </h1>
            <div className="flex items-center py-2">
              <img src="avatar.png" alt="avatar" />
              <h1 className="px-1">@jhonartist</h1>
            </div>
            <div className="flex font-rajdhani flex-col">
              <h3>Reserve price</h3>
              <h1 className="font-bold">ETH 9.31</h1>
            </div>
          </div>
          <div className="flex flex-col item-center  justify-center">
            <h1>Auction Ends in</h1>
            <div className="grid grid-cols-3 py-1">
              <div className="pr-1">
                <h1 className="font-bold">18</h1>
                <span>Hours</span>
              </div>{" "}
              <div className="px-1">
                <h1 className="font-bold">18</h1>
                <span>Hours</span>
              </div>{" "}
              <div className="pl-1">
                <h1 className="font-bold">18</h1>
                <span>Hours</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-indigo-500  relative via-purple-500 to-pink-500 px-[1.2em] flex-end py-[.7em] rounded-xl">
              Place Bid
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
