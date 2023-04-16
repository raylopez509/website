import NavigationBar from "../components/NavigationBar.js";
import styles from "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <NavigationBar />
            <Component {...pageProps} />
        </>
    );
}
