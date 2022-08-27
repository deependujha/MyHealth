import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Main from "../components/mainPage/Main";

export default function Home() {
  return (
    <div className="">
      <div className={`${styles.main}`}>
        <Main />
      </div>
    </div>
  );
}
