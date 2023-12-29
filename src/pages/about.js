
import Link from 'next/link';
import styles from '@/styles/page.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <>     
        <main>
            <h1>About Me - Suresh</h1>
            <div className={styles.textBox}>
            <p>Hey, I'm Suresh, and I'm a hobby coder. My main job is being a doctor, and I also run a successful YouTube channel. </p>
                
            <p>However, coding is my passion, and I love to tinker with technologies like Next.js and React in my spare time.</p>
            
            <p>I got fed up with not being able to find good templates for websites, especially for Next.js and React, which are my favorites to work with. </p> 
            
            <p>So, I decided to create my own templates to simplify web development.</p>
            
            <p> Connect with me on social media</p>
            </div>

            <div className={styles.grid}>
                <Link href="https://www.youtube.com/channel/UCuZROe-KygJLc1v3S7_nt7A/" target="_blank">
                    <div className={styles.card}>
                        <Image src="/images/youtube-colour.svg" width="100" height="100" />
                    </div>
                </Link>
                <Link href="https://www.facebook.com/suresh.khirwadkar/" target="_blank">
                    <div className={styles.card}>
                        <Image src="/images/facebook-colour.svg" width="100" height="100" />
                    </div>
                </Link>
                <Link href="https://twitter.com/skhirwadkar" target="_blank">
                    <div className={styles.card}>
                        <Image src="/images/twitter-colour.svg" width="100" height="100" />
                    </div>
                </Link>
          {/* Add more cards/links as needed */}
         </div>
        </main>
    </>

);
}
