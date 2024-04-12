'use client';
import Cards from "../cards";
import styles from "../../page.module.css";
import { addDoc, collection, db, deleteDoc, getDocs, limit, orderBy, query } from "../../../FirebaseComfig";
import { useEffect, useState } from "react";
import Link from "next/link";
const WomenSection = () => {
    const [product,setProduct] = useState([])
    const [info,setInfo] = useState([])
    const [size,setSize] = useState([])
    const [collor,setCollor] = useState([])
    const [price,setPrice] = useState('')
    const [setKol] = useState(0)
    const [chenge,setchenge] = useState(false)
    useEffect (() =>{
        
        const getData = async ()=>{
            try {
                const q = collection(db, 'products');
                const dataBasa = await getDocs(q);
                const basaArr = dataBasa.docs.map(doc=>doc.data());
                setProduct(basaArr);
            } catch (error) {
                console.log(error);                
            }
        }
        getData();
        setchenge(false)
    },[chenge])

    
    console.log(product);
    const kol = ['1' , '2' , '3' , '4' ] 
    return (
        <div className={styles.WmSection}>
            <section>
                    <h3 className={styles.rout}><Link href={'/'} style={{color:'blue'}}>Home</Link>/women</h3>
                    
                <div className={styles.Card_container}>
                    {product.map(e=>
                        <Cards rasm={e.rasm} 
                        title={e.title} 
                        body={e.body} 
                        style={styles.card_img}
                        btn={e.btn} />
                    )}
                </div>
                
               
            </section>
        </div>
    )
}

export default WomenSection;