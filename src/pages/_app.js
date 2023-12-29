import '@/styles/globals.css';
import Header from '@/components/Header'; // Adjust the path as needed
import Footer from '@/components/Footer';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
