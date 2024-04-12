import Navbar from "../deteils/navbar";
import MenSection from "../deteils/section/menSection";
import styles from "../page.module.css";

export default function men() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar/>
      </div>
        <MenSection/>
    </main>
  );
}
