import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import styles from '../no_btn.module.css'
import table_styles from '../table.module.css'
import no from '../images/no.png';
import EditBtn from './EditBtn';
import DltBtn from './DltBtn';

function NoBtn(props) {

    const {english, russian, transcription, num} = props;

    const [canceled, setCanceled] = useState(false);

    const handleCanceledState = () => {
        setCanceled(!canceled);

        let elm = document.getElementById(num + "english");
        let div = document.createElement('div');
        div.innerHTML = props.english;
        div.id = num + "english";
        div.classList.add(table_styles.cell);
        elm.replaceWith(div);
        
        elm = document.getElementById(num + "russian");
        div = document.createElement('div');
        div.innerHTML = props.russian;
        div.id = num + "russian";
        div.classList.add(table_styles.cell);
        elm.replaceWith(div);

        elm = document.getElementById(num + "transcription");
        div = document.createElement('div');
        div.innerHTML = props.transcription;
        div.id = num + "transcription";
        div.classList.add(table_styles.cell);
        elm.replaceWith(div);

        elm = document.getElementById(num + "btns"); 
        let btn = createRoot(elm);
        btn.render([<EditBtn english={props.english} russian={props.russian} transcription={props.transcription} num={props.num}/>, <DltBtn/>]);
    }

    return (
        <div className={styles.btn} onClick={handleCanceledState}>
            <img src={no} alt="no" className={styles.icon} />
        </div>
    );
}

export default NoBtn;
