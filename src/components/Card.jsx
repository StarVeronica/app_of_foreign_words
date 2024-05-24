import { useState } from 'react';
import styles from '../card.module.css'
import { word_list } from '../App';

function Card(props) {

    const [checked, setChecked] = useState(true);

    const handleCheckedState = () => {
        setChecked(!checked);
        const btn = document.getElementById('btn');
        if (checked) {
            btn.className = styles.check;
            btn.innerHTML = word_list[0].russian;
        } else {
            btn.className = styles.button;
            btn.innerHTML = "Проверить";
        }
    }

    return (
        <div className={styles.card}>
            <h2 className="card-title">{props.english}</h2>
            <p className="card-transcription">{props.transcription}</p>
            <p className="card-tags">{props.tags}</p>
            <div id="btn" className={styles.button} onClick={handleCheckedState} >Проверить</div>
        </div>
    );
}

export default Card;
