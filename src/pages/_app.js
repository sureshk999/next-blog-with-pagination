import '../app/globals.css';
import Header from '../components/Header'; // Adjust the path as needed

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    );
}
