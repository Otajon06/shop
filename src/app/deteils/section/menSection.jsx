'use client';
import Cards from "../cards";
import styles from "../../page.module.css";
import { addDoc, collection, db, deleteDoc, getDocs, limit, orderBy, query } from "../../../FirebaseComfig";
import { useEffect, useState } from "react";
import Link from "next/link";
const MenSection = () => {
    const [product,setProduct] = useState([])
    const [size,setSize] = useState([])
    const [collor,setCollor] = useState([])
    const [price,setPrice] = useState('')
    const [kol,setKol] = useState(0)
    // const [white,setwhite] = useState('')
    const [chenge,setchenge] = useState(false)
    useEffect (() =>{
        const getData = async ()=>{
            try {
                const q = query(collection(db, 'men_products_nike'),limit(Infinity));
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

    // const setData = async(e)=>{
    //     e.prevetDefault();
    //     setchenge(true)
    //     if(!kol.trim()) return;
    //         await addDoc(collection(db, 'men_products'),{
    //             miqdori: kol,
    //             rang: collor,
    //             razmer: size,
    //             narxi: price,
    //             createdAt: new Date(),
    //         })
    //         setData()
    //         setKol('')
    //         setCollor('')
    //         setSize('')
    //         setPrice('')
    //     } 
        const delData= async ()=> {
            try {
                await deleteDoc(doc(db, 'men_products'))
            } catch (error) {
                console.log('xato');
            }
            delData();
            setchenge(true);
        }
    console.log(product.filter(e=> e.collor == 'white'));
    const white = product.filter(e=> e.collor == 'another');
    let inputa = document.getElementById('input');
    inputa = Boolean()
    return (
        <div className={styles.MSection}>
            <section>
                    <h3 className={styles.rout}><Link href={'/'} style={{color:'blue'}}>Home</Link>/Men</h3>
                    
                    <div className={styles.Card_container}>
                        <input type="radio" id="input" value={'white'} onChange={e=>white (e.target.value)}/>
                        <div className={styles.Back_Card_container}>
                            {/* {inputa(true) ? (<div>searr</div>):inputa(false)?(<div>dddddddddddd</div>):''} */}
                            {white.map(e=>
                                <Cards rasm={e.rasm} 
                                title={e.title} 
                                style={styles.card_img}
                                price={e.price}
                                gen={'men'}
                                 />
                            )}
                        </div>
                    </div>
                
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam voluptatem aut possimus similique quod ducimus facere odit dicta atque.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestiae soluta nulla! Culpa accusantium vero molestias temporibus nobis! Vel atque dolorem modi. Vitae reprehenderit facilis eligendi rem quisquam laudantium explicabo.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iure, at ullam optio nesciunt maiores ratione esse ad cupiditate itaque qui et, similique commodi, explicabo molestias animi eius minus vitae repellat. Quae excepturi, quo ex odit esse numquam voluptatibus? Ab.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati consectetur quo libero minima alias.
            </section>
        </div>
    )
}

export default MenSection;