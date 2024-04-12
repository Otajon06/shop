

import { db,doc, getDoc  } from '../../../FirebaseComfig'; // Firebase konfiguratsiyasini import qiling
import Cards from "../../deteils/cards";
import styles from "../../page.module.css";
import Link from "next/link";
import  useEffect  from 'react';
        const getData = async (id)=>{
            try {
                const q =collection(db, 'men_products_nike',`${id}`);
                const {product} = await getDocs(q).docs.map(doc=>doc.data());
                return product;
            } catch (error) {
                console.log(error);                
            }
        }
        getData();
console.log();
const PostsDetailsPage = async ({params}) =>{
        const product = await getData(params.id);
        return (
            <div className={styles.Card_container}>
            {/* {product.map(e=>
                <Cards rasm={e.rasm} 
                title={e.title} 
                style={styles.card_img}
                gen={'men'}
                btn={e.btn} />
            )} */}
            <h1>{product.rasm}</h1>
            {product.body}
        </div>
    )
}

export default PostsDetailsPage;