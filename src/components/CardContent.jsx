import styles from './CardContent.module.css';
import avatarImg from '../../images/avatar-michelle.jpg';
import ShareButton from './ShareButton';

const CardContent = () => {
    return (
        <div className={styles.content}>
            <h3>Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home</h3>
            <p>
                Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips 
                to help you make any room feel complete.
            </p>
            <div className={styles.footer}>
                <div className={styles.author}>
                    <img 
                        src={avatarImg}
                        alt='Michelle Appleton'
                        className={styles.avatar}
                    />
                    <div>
                        <div className={styles.name}>Michelle Appleton</div>
                        <div className={styles.date}>28 Jun 2020</div>
                    </div>
                </div>
                <ShareButton />
            </div>
        </div>
    );
};

export default CardContent;