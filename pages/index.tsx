import { Button } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const callApiGet = async () => {
      const category = 1;
      const sort = "asc";

      const params = new URLSearchParams();
      params.set("category", `${category}`);
      params.set("sort", sort);

      const response = await fetch("/api/products?"+ params.toString());
      const data = await response.json();
      console.log("GET Data: " + JSON.stringify(data));
  }

  const callApiPost = async () => {
    const category = 1;
    const sort = "asc";

    const body = {
      category: category,
      sort: sort
    };

    const response = await fetch("/api/products", {
      method: 'POST',
      headers: {'Content-Type': 'application/json','Accept-Type': 'application/json',},
      body: JSON.stringify(body)
    });
    const data = await response.json();
    console.log("POST Data: " + JSON.stringify(data));
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <p>Index</p>
          <Button variant="contained" onClick={() => callApiGet()}>
            Call API GET
            </Button>
            <Button variant="contained" onClick={() => callApiPost()}>
            Call API POST
            </Button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
