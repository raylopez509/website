import NavigationBar from "../components/NavigationBar.js";
import styles from "../styles/globals.css";
import "../styles/TeamRandomizer.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <NavigationBar />
            <Component {...pageProps} />
        </>
    );
}
