import styles from '../yes_btn.module.css'
import yes from '../images/yes.png';

function YesBtn(props) {

    const {num} = props;

    return (
        <div className={styles.btn} onClick={() => props.checkValid(num)}>
            <img src={yes} alt="yes" className={styles.icon} />
        </div>
    );
}

export default YesBtn;
