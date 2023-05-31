import Questions from "../../assets/Qna/questions.png";
import QuestionIcon from "../../components/UI/Qna/QuestionIcon";
import QuestionIconSmall from "../../components/UI/Qna/QuestionIconSmall";
import useWindowDimensions from "../../utils/getWindowDimensions";
import styles from "./Qna.module.scss";

const Qna = () => {

    const { width } = useWindowDimensions();

    const setImageSize = () => {
        let imageSize;
        if (width > 1210 ) {
            imageSize = 530;
        } 
        else if (width <= 1210) {
            imageSize = 420;
        }
        return imageSize;
    }

    const toggleQuestion = (id: number) => {
        const arrow = document.getElementsByClassName(styles.content__questionToggle)[id];
        const answer = document.getElementsByClassName(styles.content__answer)[id];
        const arrowActive = arrow.classList.toggle(styles.content__questionToggleActive);
        const answerActive = answer.classList.toggle(styles.content__answerActive);
        return [arrowActive, answerActive];
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.banner}>
                <div className={styles.banner__content}>
                    <div className={styles.banner__contentHeadline}>
                        <p className={styles.banner__contentHeadlineText}>У вас вопрос - у нас ответ!</p>
                    </div>
                    <div className={styles.banner__contentBtnWrapper}>
                        <button className={styles.banner__contentBtn}>Поиск вопроса</button>
                    </div>
                </div>
                <div className={styles.banner__image}>
                    <img src={Questions} width={setImageSize()} alt="" />
                </div>
            </div>
            <div className={styles.content}>
               
                <div className={styles.content__questionWrapper}>
                    <div className={styles.content__question} onClick={() => toggleQuestion(0)}>
                        <div className={styles.content__questionIcon}>
                            {width > 1200 ? <QuestionIcon /> : <QuestionIconSmall />}
                        </div>
                        <div className={styles.content__questionText}>
                            <p>Что делать, если продавец отказывается предъявлять книгу жалоб?</p>
                        </div>
                        <div className={styles.content__questionToggle}>
                            <div className={styles.content__questionToggleLine}></div>
                            <div className={styles.content__questionToggleLine}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.content__answer}>
                    <p>Книгу жалоб продавец обязан предоставить по первому требованию. Если всё-таки Вам отказали - вызывайте милицию!</p>
                </div>

                <div className={styles.content__questionWrapper}>
                    <div className={styles.content__question} onClick={() => toggleQuestion(1)}>
                        <div className={styles.content__questionIcon}>
                            {width > 1200 ? <QuestionIcon /> : <QuestionIconSmall />}
                        </div>
                        <div className={styles.content__questionText}>
                            <p>За какой период времени исполнитель должен предупредить об отключении горячей воды?</p>
                        </div>
                        <div className={styles.content__questionToggle}>
                            <div className={styles.content__questionToggleLine}></div>
                            <div className={styles.content__questionToggleLine}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.content__answer}>
                    <p>Не позднее, чем за 2 дня до отключения.</p>
                </div>

                <div className={styles.content__questionWrapper}>
                    <div className={styles.content__question} onClick={() => toggleQuestion(2)}>
                        <div className={styles.content__questionIcon}>
                            {width > 1200 ? <QuestionIcon /> : <QuestionIconSmall />}
                        </div>
                        <div className={styles.content__questionText}>
                            <p>Можно ли отказаться от потребления жилищно-коммунальных услуг?</p>
                        </div>
                        <div className={styles.content__questionToggle}>
                            <div className={styles.content__questionToggleLine}></div>
                            <div className={styles.content__questionToggleLine}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.content__answer}>
                    <p>Можно! Главное письменно предупредить за месяц, если договор заключен меннее, чем на месяц, то за 5 дней.</p>
                </div>

                <div className={styles.content__questionWrapper}>
                    <div className={styles.content__question} onClick={() => toggleQuestion(3)}>
                        <div className={styles.content__questionIcon}>
                            {width > 1200 ? <QuestionIcon /> : <QuestionIconSmall />}
                        </div>
                        <div className={styles.content__questionText}>
                            <p>В случае планируемого перерыва в оказании коммунальных услуг в какое время исполнитель обязан сообщить о таком перерыве потребителю?</p>
                        </div>
                        <div className={styles.content__questionToggle}>
                            <div className={styles.content__questionToggleLine}></div>
                            <div className={styles.content__questionToggleLine}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.content__answer}>
                    <p>Не позднее, чем за 3 дня до начала перерыва.</p>
                </div>

                <div className={styles.content__questionWrapper}>
                    <div className={styles.content__question} onClick={() => toggleQuestion(4)}>
                        <div className={styles.content__questionIcon}>
                            {width > 1200 ? <QuestionIcon /> : <QuestionIconSmall />}
                        </div>
                        <div className={styles.content__questionText}>
                            <p>Если отключат горячую воду, когда исполнитель обязан об этом сказать?</p>
                        </div>
                        <div className={styles.content__questionToggle}>
                            <div className={styles.content__questionToggleLine}></div>
                            <div className={styles.content__questionToggleLine}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.content__answer}>
                    <p>Не позднее, чем за 2 дня до планируемого перерыва.</p>
                </div>

            </div>
        </div>
    )
}

export default Qna;
