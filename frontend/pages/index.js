import Main from "../components/mainPage/Main";
import { ethers } from "ethers";
import ABI from "/abi";
import React, { useEffect } from "react";

export default function Home({
  setMyContract,
  myOrg,
  setMyOrg,
  myContract,
  usrAddr,
  setUsrAddr,
}) {
  const connectWithMetaMask = async () => {
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    let provider = new ethers.providers.Web3Provider(window.ethereum);
    // to check with which network metamask is currently connected, and show required alert
    const { chainId } = await provider.getNetwork();
    if (chainId != 80001) {
      alert("Please connect with 'matic mumbai' in the metamask wallet.");
      return;
    }
    // console.log(chainId);

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    let signer = provider.getSigner();
    // console.log("connected with metamask");

    // creating an instance of the smart contract
    // it takes three parameters => {contract's address, abi, signer/provider}
    // provider can perform read only transactions
    // signer can perform all kind of transactions
    let contract = new ethers.Contract(
      "0x57b8556A95ecc904F58Fc5876CBEF62ab0f29F5f",
      ABI,
      signer
    );
    setMyContract(contract);
    // console.log(contract.address);
    let usrAddress = await signer.getAddress();
    setUsrAddr(usrAddress);
  };

  useEffect(() => {
    connectWithMetaMask();
  }, []);

  return (
    <div className="">
      <div className={`customText text-center mt-5`}>
        MyHealth - Your health database
      </div>
      <div className={``}>
        <Main
          connectWithMetaMask={connectWithMetaMask}
          setMyOrg={setMyOrg}
          myOrg={myOrg}
          myContract={myContract}
          usrAddr={usrAddr}
        />
      </div>
    </div>
  );
}
