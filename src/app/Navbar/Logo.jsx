import styles from "../page.module.css";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <div className={styles.Logo_continer}>
        <button onClick={() => router.push('./')} className={styles.Link}>
            <img src="https://cdn-icons-png.flaticon.com/128/7711/7711245.png" alt="Logo" className={styles.logo} />
        </button>
        </div>
    )
}

export default Logo; 
        