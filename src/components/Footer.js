import Link from 'next/link';
import styles from '@/styles/footer.module.css';

export default function Footer() {
  return ( 
    <footer className={styles.footer}>
              <Link href="https://www.buymeacoffee.com/sureshkhirwadkar" target="_blank">
              <p>If you like this template, feel free to Buy Me A Coffee ☕️</p>
          </Link>
    </footer>
  );
}
