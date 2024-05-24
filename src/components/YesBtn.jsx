import styles from '../yes_btn.module.css'
import yes from '../images/yes.png';

function YesBtn(props) {

    return (
        <div className={styles.btn}>
            <img src={yes} alt="yes" className={styles.icon} />
        </div>
    );
}

export default YesBtn;
