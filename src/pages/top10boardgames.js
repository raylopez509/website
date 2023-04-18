import styles from "../styles/top10boardgames.module.css";

export default function toptenlist() {
    return (
        <div className={styles.container}>
            <h1>Top 10 Board Games</h1>
            <ol type="1" className={styles.toptenlist}>
                <li>Twilight imperium 4</li>
                <li>Agricola</li>
                <li>Race for the Galaxy</li>
                <li>Cosmic Encounter</li>
                <li>Power Grid</li>
                <li>Battlecon</li>
                <li>Root</li>
                <li>Chinatown</li>
                <li>Dominion</li>
                <li>Battlestar Galactica</li>
                <li>Skull</li>
            </ol>
        </div>
    );
}
