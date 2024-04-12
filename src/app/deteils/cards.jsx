'use client';
import styles from "../page.module.css";
import Link from "next/link";
const Cards = (props) => {


    
    return (
        <div className={styles.Card} >
            <a href={props.href}>
            <img src={props.rasm} alt="IMG" className={props.style} />
            </a>
            <div>
                <h1 className={styles.title}>{props.title}</h1>
                <p className={styles.body}>{props.body}</p>
                <h1 className={styles.title}>{props.price}</h1>

            </div>
            <button className={styles.btn}><Link href={`${props.gen}/${props.title}`}>Buy</Link></button>
        </div>
    )
}

export default Cards;