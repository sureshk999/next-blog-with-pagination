

import styles from '@/styles/page.module.css'
// import Footer from '../components/Footer';

export default function Home() {
  return (
    <> 

    
        <main>

            <div className={styles.container}>

            <h1>About Me - Suresh</h1>

            <p>Hey, I'm Suresh, and I'm a hobby coder. My main job is being a doctor, and I also run a successful YouTube channel. </p>
                
            <p>However, coding is my passion, and I love to tinker with technologies like Next.js and React in my spare time.</p>
            
            <p>I got fed up with not being able to find good templates for websites, especially for Next.js and React, which are my favorites to work with. </p> 
            
            <p>So, I decided to create my own templates to simplify web development.</p>
            
            <p> Connect with me on social media</p>
            <div className={styles.social}>
                <ul>
                <ul><a href="#" target="_blank">Twitter</a></ul>
                <ul><a href="#" target="_blank">LinkedIn</a></ul>
                <ul><a href="#" target="_blank">YouTube</a></ul>
                </ul>
            </div>
            
                
            </div>
            </main>
    </>

);
}
