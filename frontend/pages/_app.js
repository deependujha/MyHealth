import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Head from "next/head";
import React, { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [usrAddr, setUsrAddr] = useState("");
  const [myContract, setMyContract] = useState("");
  const [myOrg, setMyOrg] = useState("Hospital");
  const [newUsrAddr, setNewUsrAddr] = useState("");
  const [usrHealthData, setUsrHealthData] = useState("");

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <title>MyHealth - Your health database</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Component
        {...pageProps}
        usrAddr={usrAddr}
        setUsrAddr={setUsrAddr}
        myContract={myContract}
        setMyContract={setMyContract}
        myOrg={myOrg}
        setMyOrg={setMyOrg}
        newUsrAddr={newUsrAddr}
        setNewUsrAddr={setNewUsrAddr}
        usrHealthData={usrHealthData}
        setUsrHealthData={setUsrHealthData}
      />
    </>
  );
}

export default MyApp;
