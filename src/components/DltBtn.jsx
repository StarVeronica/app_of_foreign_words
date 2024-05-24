import styles from '../dlt_btn.module.css';
import dlt from '../images/dlt.png';

function DltBtn(props) {

    return (
        <div className={styles.btn}>
            <img src={dlt} alt="delete" className={styles.icon} />
        </div>
    );
}

export default DltBtn;
