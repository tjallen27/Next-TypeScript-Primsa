import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";

const Home: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/profile");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Test title</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Test</h1>
        <h4 style={{ margin: "10px 0" }}>test subtext</h4>
        <div style={{ display: "flex", margin: "10px 0" }}>
          <Button handleClick={() => handleClick()} variant="secondary">
            Explore
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
