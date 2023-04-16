import styles from "../styles/NavigationBar.module.css";
import Link from "next/link";

export default function NavigationBar() {
    return (
        <>
            <div className={styles.header}>
                <h1>Ray is on the Web</h1>
                <p>i leik board games</p>
            </div>
            <div className={styles.navbar}>
                <Link href="/">Home</Link>
                <a href="/posts/first-post">Applications</a>
                <a href="#">First Person Selector</a>
                <a href="#">Team Randomizer</a>
                <a href="#">Top 10 Board Games</a>
                <a href="#">Board Game Collection</a>
            </div>
        </>
    );
}
