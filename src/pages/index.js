import Link from 'next/link';
import styles from '@/styles/page.module.css';



export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1>Blog With Pagination</h1>
        <h2>NEXT.js/React</h2>
        <h3>Boilerplate</h3>

        <div className={styles.grid}>
          <Link href="/blog">
            <div className={styles.card}>
              <h3>Blog &rarr;</h3>
              <p>Discover my thoughts</p>
            </div>
          </Link>
          <Link href="/about">
            <div className={styles.card}>
              <h3>About &rarr;</h3>
              <p>Discover more about me</p>
            </div>
          </Link>
          {/* Add more cards/links as needed */}
        </div>
        <p> Looking for a boilerplate for Next.JS / React?</p>
        <p> Need pagination and can't find a template? Look no further!</p>
      </main>

    </>

  );
}
