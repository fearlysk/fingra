import { Link } from "react-router-dom";
import Logo from "../UI/Logo";
import Search from "../UI/Search";
import styles from "./Header.module.scss";
import routes from "../../constants/routes";

const Header = () => {

    const openBurgerMenu = () => {
        const burgerMenuBtn = document.getElementsByClassName(styles.header__burger)[0];
        const changeClass = burgerMenuBtn.classList.toggle(styles.change);
        return changeClass;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header__group}>
                    <div className={styles.header__item}>
                        <div className={styles.logo}>
                            <Link to={routes.HOME}><Logo /></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.header__group}>
                    <div className={styles.header__item}>
                        <div className={styles.header__itemSearch}>
                            <Search scale="1.2" />
                        </div>
                    </div>
                    <div className={styles.header__item}>
                        <div className={styles.header__burger} onClick={() => openBurgerMenu()}>
                            <div className={styles.header__burgerBar1}></div>
                            <div className={styles.header__burgerBar2}></div>
                            <div className={styles.header__burgerBar3}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Header;
