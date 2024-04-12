import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "./deteils/navbar";
import HomeSection from "./deteils/section/homeSection";
import HomeFooter from "./deteils/footer/homeFooter";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar/>
      </div>
      <HomeSection/>
      <HomeFooter/>
    </main>
  );
}
