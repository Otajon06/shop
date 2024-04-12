import Navbar from "../deteils/navbar";
import WomenSection from "../deteils/section/womenSection";
import styles from "../page.module.css";

export default function men() {
  return (
    <main className={styles.main}>
      <header className={styles.description}>
        <Navbar/>
      </header>
      <section>
        <WomenSection/>
      </section>
    </main>
  );
}
