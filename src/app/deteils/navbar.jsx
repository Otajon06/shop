'use client';
import Logo from "../Navbar/Logo";
import Title from "../Navbar/Title";
import Icon from "../Navbar/icon";
import styles from "../page.module.css";

const Navbar = () => {

    // const element = document.getElementById("Navbar");

    // function searchClick () {
        // element.style.backgroundColor = 'red'
    // }    
    
    return (
        <div className={styles.Navbar} id="Navbar">
            <Logo/>
            <Title/>
            <Icon />
        </div>
    )
}

export default Navbar;