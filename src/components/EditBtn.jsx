import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import styles from '../edit_btn.module.css'
import table_styles from '../table.module.css'
import edit from '../images/edit.png';
import YesBtn from './YesBtn';
import NoBtn from './NoBtn';

function EditBtn(props) {

    const {english, russian, transcription, num} = props;

    const [edited, setEdited] = useState(false);

    const handleEditedState = () => {
        setEdited(!edited);

        let elm = document.getElementById(num + "english");
        let input = document.createElement('input');
        input.type = 'text';
        input.id = num + "english";
        input.value = props.english;
        input.classList.add(table_styles.cell);
        elm.replaceWith(input);
        
        elm = document.getElementById(num + "russian");
        input = document.createElement('input');
        input.type = 'text';
        input.id = num + "russian";
        input.value = props.russian;
        input.classList.add(table_styles.cell);
        elm.replaceWith(input);

        elm = document.getElementById(num + "transcription");
        input = document.createElement('input');
        input.type = 'text';
        input.id = num + "transcription";
        input.value = props.transcription;
        input.classList.add(table_styles.cell);
        elm.replaceWith(input);

        elm = document.getElementById(num + "btns"); 
        let btn = createRoot(elm);
        btn.render([<YesBtn checkValid={props.checkValid} num={props.num} />, <NoBtn english={props.english} russian={props.russian} transcription={props.transcription} num={props.num} checkValid={props.checkValid} />]);
    }

    return (
        <div className={styles.btn} onClick={handleEditedState}>
            <img src={edit} alt="edit" className={styles.icon} />
        </div>
    );
}

export default EditBtn;
