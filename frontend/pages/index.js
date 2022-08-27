import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Button
        variant="primary"
        onClick={() => {
          console.log("button clicked");
        }}
      >
        Primary
      </Button>
    </div>
  );
}
