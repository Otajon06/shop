import styles from "../page.module.css";
import Link from "next/link";
const Title = () => {
    return (
        <div className={styles.Title_continer}>
        <Link href={'./men'} className={styles.Title}>Men</Link>
        <Link href={'./women'} className={styles.Title}>Women</Link>
        </div>
    )
}

export default Title; 