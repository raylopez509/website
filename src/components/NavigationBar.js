import styles from "../styles/NavigationBar.module.css";
import Link from "next/link";

const links = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/projects',
    text: 'Projects',
  },
  {
    href: '/tictactoe',
    text: 'Tic Tac Toe',
  },
  {
    href: '/firstperson',
    text: 'First Person Selector',
  },
  {
    href: '/teamrandomizer',
    text: 'Team Randomizer',
  },
  {
    href: 'top10boardgames',
    text: 'Top 10 Board Games',
  },
  // {
  //   href: '#',
  //   text: 'Board Game Collection',
  // },
]

export default function NavigationBar() {
    return (
        <>
            <div className={styles.header}>
                <h1>Ray is on the Web</h1>
                <p>i leik board games</p>
            </div>
            <div className={styles.navbar}>
              {links.map(link => (
                  <Link href={link.href}>{link.text}</Link>
              ))}
                {/* <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/tictactoe">Tic Tac Toe</Link>
                <Link href="/firstperson">First Person Selector</Link>
                <Link href="/teamrandomizer">Team Randomizer</Link>
                <Link href="/top10boardgames">Top 10 Board Games</Link> */}
                {/* <a href="#">Board Game Collection</a> */}
            </div>
        </>
    );
}
