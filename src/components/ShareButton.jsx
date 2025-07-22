import {useState} from 'react';
import styles from './ShareButton.module.css';
import shareImg from '../../images/icon-share.svg';
import fbIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import pinterestIcon from '../../images/icon-pinterest.svg';

const ShareButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.shareContainer}>
            <button 
                className={`${styles.shareIcon} ${open ? styles.active : ''} `}
                onClick={() => setOpen(!open)}
            > 
                <img src={shareImg} alt='share icon'/>
            </button>

            {open && (
                <div className={styles.popup}>
                    <span>SHARE</span>
                    <img src={fbIcon} alt='facebook'/>
                    <img src={twitterIcon} alt='twitter'/>
                    <img src={pinterestIcon} alt='pinterest'/>
                    <div className={styles.arrow}></div>
                </div>
            )}
        </div>    
    );
}

export default ShareButton;