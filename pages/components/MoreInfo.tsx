/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function MoreInfo() {
  return (
    <div className="w-full relative ">
      <div className="w-full ">
        <img src="bg.png" alt="" className="w-full " />
      </div>
      
     <div className="w-full flex justify-center items-center">
      <div className="flex gradient sm:max-w-xl  max-w-md border-2 border-gray-400 absolute sm:-bottom-12 sm:right-10 rounded-xl backdrop-blur-md flex-col px-6 py-3 justify-center items-center text-center ">
        <h1 className="font-mono text-4xl sm:text-5xl py-4">How does milkyWEI work ?</h1>
        <p className="text-xl">
        
In a decentralized game development marketplace, developers can use cryptocurrency to buy or sell assets such as 3D models, textures, and other game development resources. Transactions are made directly between buyers and sellers, without the need for a third-party platform. As a result, developers can buy and sell assets faster and with fewer transaction fees, while maintaining their privacy and security. 
        </p>
      </div>
    </div> 
    </div>
  );
}
