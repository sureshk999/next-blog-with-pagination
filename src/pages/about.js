
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

         </div>

         <div>
            <h3>Where can I learn more?</h3>
            <p> Follow along with my coding and development work at <a href="https://sureshkhirwadkar.dev">sureshkhirwadkar.dev</a></p>
            <p> If you want to learn a little more about me <a href="https://sureshkhirwadkar.com">sureshkhirwadkar.com</a></p>
            <p> Check out my medical site at <a href="https://drsuresh.com.au">drsuresh.com.au</a></p>
            <p> I have a podcast! <a href="https://themeatmedic.com">Click Here</a></p>
         </div>


        </main>
    </>

);
}
