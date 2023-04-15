import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className={styles.header}>
                <h1>Ray is on the Web</h1>
                <p>i leik board games</p>
            </div>
            <div className={styles.navbar}>
                <a href="#">Applications</a>
                <a href="#">First Person Selector</a>
                <a href="#">Team Randomizer</a>
                <a href="#">Top 10 Board Games</a>
                <a href="#">Board Game Collection</a>
            </div>
            <div className={styles.row}>
                <div className={styles.side}>
                    idk what's gonna go here, maybe a picture?
                </div>
                <Image
                    src="/images/silhouette.jpg"
                    height={500}
                    width={500}
                    alt="My Picture"
                />
                <div className={styles.main}>this is my website</div>
            </div>
            <div className={styles.footer}>
                <h2>All rights reserved by Ray®</h2>
            </div>
        </>
    );
}
