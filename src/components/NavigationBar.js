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
                <Link href="/posts/first-post">Applications</Link>
                <a href="/firstperson">First Person Selector</a>
                <Link href="/teamrandomizer">Team Randomizer</Link>
                <a href="#">Top 10 Board Games</a>
                <a href="#">Board Game Collection</a>
            </div>
        </>
    );
}
