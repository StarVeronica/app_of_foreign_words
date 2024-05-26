import styles from '../table.module.css'
import EditBtn from './EditBtn';
import DltBtn from './DltBtn';
import { word_list } from '../App';
import { createRoot } from 'react-dom/client';

function Table(props) {

    const setSave = (num) => {
        let elm = document.getElementById(num + "english");
        let div = document.createElement('div');
        div.id = num + "english";
        div.innerHTML = elm.value;
        const eng = div.innerHTML;
        word_list[num - 1].english = div.innerHTML;
        div.classList.add(styles.cell);
        elm.replaceWith(div);
        
        elm = document.getElementById(num + "russian");
        div = document.createElement('div');
        div.id = num + "russian";
        div.innerHTML = elm.value;
        const rus = div.innerHTML;
        word_list[num - 1].russian = div.innerHTML;
        div.classList.add(styles.cell);
        elm.replaceWith(div);

        elm = document.getElementById(num + "transcription");
        div = document.createElement('div');
        div.id = num + "transcription";
        div.innerHTML = elm.value;
        const trans = div.innerHTML;
        word_list[num - 1].transcription = div.innerHTML;
        div.classList.add(styles.cell);
        elm.replaceWith(div);

        word_list[num - 1].checked = false;

        elm = document.getElementById(num + "btns"); 
        let btn = createRoot(elm);
        btn.render([<EditBtn english={eng} russian={rus} transcription={trans} num={num} checkValid={checkValid} />, <DltBtn/>]);
    }

    const checkValid = (index) => {
        const inputs = ["english", "russian", "transcription"];
        let valid = true;
        for (let i = 0; i < 3; i++) {
            const elm = document.getElementById(index + inputs[i]);
            if (!elm.value) {
                elm.className = styles.incorrect;
                valid = false;
            } else {
                elm.className = styles.cell;
            }
        }
        if (valid) {
            setSave(index);
        } else {
            alert("Пожалуйста, заполните все поля корректно");
        }
    }

    return (
        <body>
            <h1>Таблица слов</h1>
            <main className={styles.container}>
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
                        <> {<EditBtn english={item.english} russian={item.russian} transcription={item.transcription} num={index} checkValid={checkValid}></EditBtn>} {<DltBtn></DltBtn>} </>
                        </div>
                        </>
                    )
                    
                }
            <script src="EditBtn.jsx"></script>
            <script src="NoBtn.jsx"></script>
            </main>
        </body>
    );
}

export default Table;
