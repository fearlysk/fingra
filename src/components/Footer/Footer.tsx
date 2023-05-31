import Inst from "../UI/Footer/Inst";
import TikTok from "../UI/Footer/TikTok";
import Telegram from "../UI/Footer/Telegram";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.footer}>
                <div className={styles.footer__item}>
                    <p>FINGRA.BY, 2023</p>
                </div>
                <div className={styles.footer__item}>
                    <div>
                        <Inst />
                    </div>
                    <div>
                        <TikTok />
                    </div>
                    <div>
                        <Telegram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
