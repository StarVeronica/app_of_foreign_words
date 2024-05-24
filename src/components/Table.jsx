import styles from '../table.module.css'
import EditBtn from './EditBtn';
import DltBtn from './DltBtn';
import { word_list } from '../App';

function Table(props) {

    return (
        <main className={styles.container} id="tab">
                <div className={styles.cell}>#</div>
                <div className={styles.cell}>слово</div>
                <div className={styles.cell}>перевод</div>
                <div className={styles.cell}>транскрипция</div>
                <div className={styles.cell}></div>

            {
                    word_list.map((item, index) =>
                    <>
                    <div key={index + "words"} className={styles.cell}>{index += 1}</div>
                    <> {<div id={index + "english"} className={styles.cell}>{item.english}</div>} {<div id={index + "russian"} className={styles.cell}>{item.russian}</div>} {<div id={index + "transcription"} className={styles.cell}>{item.transcription}</div>} </>
                    <div key={index + "btns"} className={styles.cell} id={index + "btns"}>  
                    <> {<EditBtn english={item.english} russian={item.russian} transcription={item.transcription} num={index}></EditBtn>} {<DltBtn></DltBtn>} </>
                    </div>
                    </>
                )
                
            }
        <script src="EditBtn.jsx"></script>
        <script src="NoBtn.jsx"></script>
        </main>
    );
}

export default Table;
