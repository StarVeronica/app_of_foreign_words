import styles from '../card.module.css'

function Card(props) {

    return (
        <div className={styles.card}>
            <h2 className="card-title">{props.english}</h2>
            <p className="card-transcription">{props.transcription}</p>
            <p className="card-tags">{props.tags}</p>
            <div id={props.counter + "btn"} className={styles.button} onClick={() => props.handleChecked(props.counter) } >Проверить</div>
        </div>
    );
}

export default Card;
