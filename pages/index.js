import Head from "next/head";
import styles from "../styles/Home.module.css";
import Spreadsheet from "../components/Spreadsheet";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Excel converter App</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
        <script src="/shim.js"></script>
        <style jsx>{`
          body,
          #app {
            height: 100%;
          }
        `}</style>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Excel-converter!</h1>
        <Spreadsheet />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
