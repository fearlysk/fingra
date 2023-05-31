import { Link } from "react-router-dom";
import Article from "../../components/UI/Article";
import Fact from "../../components/UI/Fact";
import Kid from "../../components/UI/Kid";
import Qna from "../../components/UI/Qna";
import Quote from "../../components/UI/Quote";
import Search from "../../components/UI/Search";
import styles from "./Home.module.scss";
import Site from "../../assets/Home/about_site.png";
import Arina from "../../assets/Home/Team/arina.png";
import Veronika from "../../assets/Home/Team/veronika.png";
import Kristina from "../../assets/Home/Team/kristina.png";
import Vika from "../../assets/Home/Team/vika.png";
import Vlad from "../../assets/Home/Team/vlad.png";
import Ilya from "../../assets/Home/Team/ilya.png";
import Katya from "../../assets/Home/Team/katya.png";
import Angelina from "../../assets/Home/Team/angelina.png";
import Sonya from "../../assets/Home/Team/sonya.png";
import Sasha from "../../assets/Home/Team/sasha.png";
import Vanya from "../../assets/Home/Team/vanya.png";
import useWindowDimensions from "../../utils/getWindowDimensions";
import routes from "../../constants/routes";

const Home = () => {

    const { width } = useWindowDimensions();

    const setNotebookSize = () => {
        let notebookSize;
        if (width > 1478 ) {
            notebookSize = 810;
        } 
        else {
            notebookSize = 660;
        }
        return notebookSize;
    }

    const setImagesSize = () => {
        let imageSize;
        if (width > 1450) {
            imageSize = 380;
        }
        if (width < 1450) {
            imageSize = 320;
        }
        if (width < 1192) {
            imageSize = 260;
        }
        if (width < 980) {
            imageSize = 220;
        }
        if (width < 841) {
            imageSize = 380;
        }
        if (width < 403) {
            imageSize = 240;
        }
        return imageSize;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.banner__wrapper}>
                    <div className={styles.banner}>
                        <div className={styles.banner__text}>
                            <p className={styles.banner__textLiteracy}>ФИНАНСОВАЯ ГРАМОТНОСТЬ</p>
                            <p className={styles.banner__textFingra}>FINGRA.BY</p>
                            <p className={styles.banner__textGuide}>Твой личный гид к успеху</p>
                        </div>
                    </div>
                    <div className={styles.banner__support}></div>
                </div>
                <div className={styles.search}>
                    <div className={styles.search__text}>
                        <div className={styles.search__textLogo}><Search scale="1.8" /></div>
                        <div className={styles.search__textContent}><p>Поиск по сайту</p></div>
                    </div>
                    <div className={styles.search__input}>
                        <input className={styles.search__inputField} type="text" placeholder="Как стать богатым?" />
                    </div>
                    <div className={styles.search__btn}>
                        <button className={styles.search__btnFind}>Найти</button>
                    </div>
                </div>
                <div className={styles.pages}>
                    <div className={styles.pages__item}>
                        <Link to={routes.QNA}>
                            <div className={styles.pages__itemText}>Вопрос - ответ</div>
                            <div className={styles.pages__itemImage}><Qna /></div>
                        </Link>
                    </div>
                    <div className={styles.pages__item}>
                        <div className={styles.pages__itemText}>Цитатник</div>
                        <div className={styles.pages__itemImage}><Quote /></div>
                    </div>
                    <div className={styles.pages__item}>
                        <div className={styles.pages__itemText}>#по_факту</div>
                        <div className={styles.pages__itemImage}><Fact /></div>
                    </div>
                    <div className={styles.pages__item}>
                        <div className={styles.pages__itemText}>Статьи</div>
                        <div className={styles.pages__itemImage}><Article /></div>
                    </div>
                    <div className={styles.pages__item}>
                        <div className={styles.pages__itemText}>FINGRA Kids</div>
                        <div className={styles.pages__itemImage}><Kid /></div>
                    </div>
                </div>
                <div className={styles.about}>
                    <div className={styles.about__content}>
                        <div className={styles.about__contentHeadline}>
                            <h1 className={styles.about__contentHeadlineText}>ЧТО ТАКОЕ FINGRA.BY?</h1>
                        </div>
                        <div className={styles.about__contentSeparator}></div>
                        <div className={styles.about__contentText}>
                            <p><span className={styles.about__contentTextHighlighted}>Наша цель:</span> доносить доступную, полезную и применимую на практике информацию об инвестировании,
                                страховании, накоплении и прочих финансовых инструментах на языке, понятном каждому.</p>
                            <p>Мы понимаем особенности восприятия каждой возрастной категории, поэтому <span className={styles.about__contentTextHighlighted}>адаптируем контент отдельно для детей 
                                младшего и среднего школьного возраста, подростков и взрослых.</span> Мы докажем вам, что финансы бывают нескучными, 
                                а сложные процессы можно разложить по полочкам.</p>
                        </div>
                        <div className={styles.about__contentBtnWrapper}>
                            <button className={styles.about__contentBtn}>Подробнее</button>
                        </div>
                    </div>
                    <div className={styles.about__imageWrapper}>
                        <div className={styles.about__imageShadow}></div>
                        <img className={styles.about__image} src={Site} width={setNotebookSize()} alt="" />
                    </div>
                </div>
                <div className={styles.news}>
                    <div className={styles.news__headline}>
                        <h1 className={styles.news__headlineText}>НОВОСТИ</h1>
                    </div>
                    <div className={styles.news__content}>
                        <div className={styles.news__contentItem}>
                            <div className={styles.news__contentItemHeadline}>
                                <p className={styles.news__contentItemHeadlineText}>«Приорбанк» прекратил при...</p>
                            </div>
                            <div className={styles.news__contentItemDate}>
                                <p>9 апреля 2023 г.</p>
                            </div>
                        </div>
                        <div className={styles.news__contentItem}>
                            <div className={styles.news__contentItemHeadline}>
                                <p className={styles.news__contentItemHeadlineText}>Курсы валют Национальн...</p>
                            </div>
                            <div className={styles.news__contentItemDate}>
                                <p>12 апреля 2023 г.</p>
                            </div>
                        </div>
                        <div className={styles.news__contentItem}>
                            <div className={styles.news__contentItemHeadline}>
                                <p className={styles.news__contentItemHeadlineText}>Изменения в ведении на...</p>
                            </div>
                            <div className={styles.news__contentItemDate}>
                                <p>19 апреля 2023 г.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.news__allNews}>
                        <button>Все новости</button>
                    </div>
                </div>

                <div className={styles.team}>
                    <div className={styles.team__headline}>
                        <div className={styles.team__headlineLine}></div>
                        <div className={styles.team__headlineText}>КОМАНДА</div>
                        <div className={styles.team__headlineLine}></div>
                    </div>
                    <div className={styles.team__content}>
                        <div className={styles.team__contentRow}>
                            <div className={styles.team__contentRowItem}>
                                <div className={styles.team__contentRowItemImage}>
                                    <img src={Arina} width={setImagesSize()} alt="" />
                                </div>
                                <div className={styles.team__contentRowItemName}>
                                    <p>КУРСОВА</p>
                                    <p>АРИНА ДМИТРИЕВНА</p>
                                </div>
                                <div className={styles.team__contentRowItemPosition}>
                                    <p>КООРДИНАТОР</p>
                                </div>
                            </div>
                            <div className={styles.team__contentRowItem}>
                                <div className={styles.team__contentRowItemImage}>
                                    <img src={Veronika} width={setImagesSize()} alt="" />
                                </div>
                                <div className={styles.team__contentRowItemName}>
                                    <p>СОЛАНОВИЧ</p>
                                    <p>ВЕРОНИКА АЛЕКСАНДРОВНА</p>
                                </div>
                                <div className={styles.team__contentRowItemPosition}>
                                    <p>ФОТОГРАФ</p>
                                </div>
                            </div>
                            <div className={styles.team__contentRowItem}>
                                <div className={styles.team__contentRowItemImage}>
                                    <img src={Kristina} width={setImagesSize()} alt="" />
                                </div>
                                <div className={styles.team__contentRowItemName}>
                                    <p>ЛИТОШИК</p>
                                    <p>КРИСТИНА ДМИТРИЕВНА</p>
                                </div>
                                <div className={styles.team__contentRowItemPosition}>
                                    <p>TIKTOK-КРЕАТОР</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.team__contentRow}>
                            <div className={styles.team__contentRowItem}>
                                <div className={styles.team__contentRowItemImage}>
                                    <img src={Vika} width={setImagesSize()} alt="" />
                                </div>
                                <div className={styles.team__contentRowItemName}>
                                    <p>ЯЗЫКОВА</p>
                                    <p>ВИКТОРИЯ КИРИЛЛОВНА</p>
                                </div>
                                <div className={styles.team__contentRowItemPosition}>
                                    <p>TIKTOK-КРЕАТОР</p>
                                </div>
                            </div>
                            <div className={styles.team__contentRowItem}>
                                <div className={styles.team__contentRowItemImage}>
                                    <img src={Vlad} width={setImagesSize()} alt="" />
                                </div>
                                <div className={styles.team__contentRowItemName}>
                                    <p>ЕРМАКОВИЧ</p>
                                    <p>ВЛАДИСЛАВ АЛЕКСАНДРОВИЧ</p>
                                </div>
                                <div className={styles.team__contentRowItemPosition}>
                                    <p>YOUTUBE-КРЕАТОР</p>
                                </div>
                            </div>
                            <div className={styles.team__contentRowItem}>
                                <div className={styles.team__contentRowItemImage}>
                                    <img src={Ilya} width={setImagesSize()} alt="" />
                                </div>
                                <div className={styles.team__contentRowItemName}>
                                    <p>АЛЕКСЕЙЧЕНКО</p>
                                    <p>ИЛЬЯ СЕРГЕЕВИЧ</p>
                                </div>
                                <div className={styles.team__contentRowItemPosition}>
                                    <p>ПРОГРАММИСТ</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.team__contentRow}>
                            <div className={styles.team__contentRowItem}>
                                <div className={styles.team__contentRowItemImage}>
                                    <img src={Katya} width={setImagesSize()} alt="" />
                                </div>
                                <div className={styles.team__contentRowItemName}>
                                    <p>ЯКИМЧИК</p>
                                    <p>ЕКАТЕРИНА СЕРГЕЕВНА</p>
                                </div>
                                <div className={styles.team__contentRowItemPosition}>
                                    <p>ДИЗАЙНЕР</p>
                                </div>
                            </div>
                            <div className={styles.team__contentRowItem}>
                                <div className={styles.team__contentRowItemImage}>
                                    <img src={Angelina} width={setImagesSize()} alt="" />
                                </div>
                                <div className={styles.team__contentRowItemName}>
                                    <p>ЛУКОМСКАЯ</p>
                                    <p>АНГЕЛИНА НИКОЛАЕВНА</p>
                                </div>
                                <div className={styles.team__contentRowItemPosition}>
                                    <p>ОПЕРАТОР-ПОСТАНОВЩИК</p>
                                </div>
                            </div>
                            <div className={styles.team__contentRowItem}>
                                <div className={styles.team__contentRowItemImage}>
                                    <img src={Sonya} width={setImagesSize()} alt="" />
                                </div>
                                <div className={styles.team__contentRowItemName}>
                                    <p>СЕРГЕЕВА</p>
                                    <p>СОФЬЯ СЕРГЕЕВНА</p>
                                </div>
                                <div className={styles.team__contentRowItemPosition}>
                                    <p>КОПИРАЙТЕР</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.team__contentRow}>
                            <div className={styles.team__contentRowItem}>
                                <div className={styles.team__contentRowItemImage}>
                                    <img src={Sasha} width={setImagesSize()} alt="" />
                                </div>
                                <div className={styles.team__contentRowItemName}>
                                    <p>ВЕРОВКА</p>
                                    <p>АЛЕКСАНДРА НИКОЛАЕВНА</p>
                                </div>
                                <div className={styles.team__contentRowItemPosition}>
                                    <p>КОПИРАЙТЕР</p>
                                </div>
                            </div>
                            <div className={styles.team__contentRowItem}>
                                <div className={styles.team__contentRowItemImage}>
                                    <img src={Vanya} width={setImagesSize()} alt="" />
                                </div>
                                <div className={styles.team__contentRowItemName}>
                                    <p>ВОЛЧОК</p>
                                    <p>ИВАН СЕРГЕЕВИЧ</p>
                                </div>
                                <div className={styles.team__contentRowItemPosition}>
                                    <p>АГЕНТ ПО СВЯЗЯМ С ОБЩЕСТВЕННОСТЬЮ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
