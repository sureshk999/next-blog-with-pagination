import Link from 'next/link';
import styles from '@/styles/page.module.css';
import Image from 'next/image';


export default function Home() {
  return (

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>Blog With Pagination</h1>
          <h2>Free Boilerplate</h2>
        </div>
        <h3>Made With</h3>

        <div className={styles.grid}>
            
          <div className={styles.card}>
            <Image src="/images/next-js.svg" width="100" height="50"/>
          </div>
          <div className={styles.card}>
            <Image src="/images/reactjs.svg" width="100" height="50"/>
          </div>
          <div className={styles.card}>
            <Image src="/images/mdx.svg" width="50" height="50"/>
          </div>
        </div>

        <div className={styles.textBox}>
          <p> Looking for a boilerplate for Next.JS / React? Need pagination for the blog and can't find a template? Look no further!</p>
          <p> This boilerplate is free to use and modify as you wish, licensed under the creative commons license.</p>
          <p>That means you can distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator <Link style={{color: "purple"}} href="https://sureshkhirwadkar.com" target="_blank">(me - Suresh Khirwadkar)</Link>.</p>
        </div>

        <h3>Deploy For Free </h3>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/images/vercel.svg" width="100" height="50"/>
          </div>
          <div className={styles.card}>
            <Image src="/images/cloudflare.svg" width="100" height="50"/>
          </div>
          <div className={styles.card}>
            <Image src="/images/netlify.svg" width="100" height="50"/>
          </div>
        </div>

        <div className={styles.textBox}>
          <p> Easily deploy to Vercel, Cloudflare or Netlify via Github, or deploy to another hosting program.</p>
          <Link href="/blog">Click here for more information </Link>
        </div>
        

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
              <p>More about me</p>
            </div>
          </Link>
          {/* Add more cards/links as needed */}
        </div>
        <h3>Super Lightweight and Blazing Fast</h3>
        <div>
          <Image src="/images/ss.jpg" width="640" height="497" />
        </div>


      </main>



  );
}
