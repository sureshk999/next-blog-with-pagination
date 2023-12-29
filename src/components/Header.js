import Link from 'next/link';
import styles from '@/styles/header.module.css';

export default function Header() {
  return ( 
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <span className={styles.logo}>My Portfolio</span>
        </Link>
        <div>
          <Link href="/">
            <span className={styles.navLink}>Home</span>
          </Link>
          <Link href="/blog">
            <span className={styles.navLink}>Blog</span>
          </Link>
          <Link href="/about">
            <span className={styles.navLink}>About</span>
          </Link>
          <Link target="_blank" href="https://github.com/sureshk999/blog-with-paginate.git">
            <span className={styles.navLink}>GitHub</span>
          </Link>

          
          {/* Add more navigation links as needed */}
        </div>
      </nav>
    </header>
  );
}
