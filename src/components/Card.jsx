import styles from '../card.module.css'
import { useEffect, useRef } from 'react';

function Card(props) {

    // const Focus = () => {
    //     const ref = useRef();
    //     useEffect(() => ref.current.focus(), []);
    // }

    return (
        <div className={styles.card}>
            <h2 className="card-title">{props.english}</h2>
            <p className="card-transcription">{props.transcription}</p>
            <p className="card-tags">{props.tags}</p>
            <div id={props.counter + "btn"} className={styles.button} onClick={() => props.handleChecked(props.counter) } >Проверить</div>
            {/* {
                btn = forwardRef((ref) => (<div id={props.counter + "btn"} className={styles.button} onClick={() => props.handleChecked(props.counter) } ref={ref} >Проверить</div>))
                
            } */}
        </div>
    );
}

export default Card;
