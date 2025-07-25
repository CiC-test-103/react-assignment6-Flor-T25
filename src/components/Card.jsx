import styles from './Card.module.css'
import CardContent from './CardContent.jsx'

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.imageSection}></div>
            <CardContent />
        </div>
    );
};

export default Card;