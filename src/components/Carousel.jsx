import Card from './Card';
import styles from '../carousel.module.css';
import card_styles from '../card.module.css'
import { useState, useEffect } from 'react';
import right_arrow from '../images/right_arrow.png';
import left_arrow from '../images/left_arrow.png';
function Carousel(props) {

    const {list, i} = props;

    const [counter, setCounter] = useState(i);

    const [learned, setLearned] = useState(0);

    useEffect(() => {
        const focus_btn = document.getElementById("card").lastChild.lastChild;
        focus_btn.focus();
    })

    const handleLeft = () => {
        if (counter === 0) {
            setCounter(list.length - 1);
            changeCard(list.length - 1);
        } else {
            setCounter(counter - 1);
            changeCard(counter - 1);
        }
    }

    const handleRight = () => {
        if (counter === list.length - 1) {
            setCounter(0);
            changeCard(0);
        } else {
            setCounter(counter + 1);
            changeCard(counter + 1);
        }
    }

    const handleChecked = (counter) => {
        if (list[counter].checked === false) {
            setLearned(learned + 1);
            list[counter].checked = true;
            const answer = document.createElement('div');
            answer.className = card_styles.check;
            answer.innerHTML = list[counter].russian;
            const btn = document.getElementById("card").lastChild.lastChild
            btn.replaceWith(answer);
        }
    }

const changeCard = (counter) => {
    if (list[counter].checked) {
        const answer = document.createElement('div');
        answer.className = card_styles.check;
        answer.innerHTML = list[counter].russian;
        const btn = document.getElementById("card").lastChild.lastChild
        btn.replaceWith(answer);
    } else {
        const btn = document.createElement('div');
        btn.className = card_styles.button;
        btn.innerHTML = "Проверить";
        btn.addEventListener("click", () => handleChecked(counter));
        const answer = document.getElementById("card").lastChild.lastChild
        answer.replaceWith(btn);
    }
}

    return (
        <body id="body">
            <h1>Изучение слов</h1>
            <div className={styles.carousel}>
                <img src={left_arrow} alt='left arrow' className={styles.arrow} onClick={handleLeft} />
                <div id={"card"}>
                    <Card english={list[counter].english} russian={list[counter].russian} transcription={list[counter].transcription} counter={counter} checked={list[counter].checked} handleChecked={handleChecked} ></Card>
                </div>
                <img src={right_arrow} alt='right arrow' className={styles.arrow} onClick={handleRight} id="arrowr"/>
            </div>
            <h1>{counter + 1}/{list.length}</h1>
            <h2>Выученно слов: {learned}</h2>
        </body>
    );
}


Carousel.defaultProps = {i: 0, list: [{"id":"15393","english":"news","transcription":"[njuːs]","russian":"новости","tags":"general","tags_json":"[\"general\"]", "checked": false},{"id":"15399","english":"mama","transcription":"[mama]","russian":"мама","tags":"general","tags_json":"[\"general\"]", "checked": false},{"id":"15400","english":"garbage","transcription":"[garba:ge]","russian":"мусор","tags":"основы","tags_json":"[\"u043eu0441u043du043eu0432u044b\"]", "checked": false},{"id":"15405","english":"house ","transcription":"[haus]","russian":"дом","tags":"Array","tags_json":"null", "checked": false},{"id":"15406","english":"sun","transcription":"[sʌn]","russian":"солнце","tags":"Array","tags_json":"null", "checked": false},{"id":"15407","english":"plane","transcription":"[pleɪn]","russian":"самолет","tags":"","tags_json":"[]", "checked": false},{"id":"15408","english":"butterfly","transcription":"[ˈbʌtəflaɪ]","russian":"бабочка","tags":"","tags_json":"[]", "checked": false}]};

export default Carousel;
