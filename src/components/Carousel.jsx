import Card from './Card';
import styles from '../carousel.module.css';
import { useState } from 'react';
import right_arrow from '../images/right_arrow.png';
import left_arrow from '../images/left_arrow.png';

function Carousel(props) {

    const {list, i} = props;

    const [counter, setCounter] = useState(i - 1 || 0);

    const handleLeft = () => {
        if (counter === 0) {
            setCounter(list.length - 1);
        } else {
            setCounter(counter - 1);
        }
    }

    const handleRight = () => {
        if (counter === list.length - 1) {
            setCounter(0);
        } else {
            setCounter(counter + 1);
        }
    }

    return (
        <body>
            <h1>Изучение слов</h1>
            <div className={styles.carousel}>
                <img src={left_arrow} alt='left arrow' className={styles.arrow} onClick={handleLeft} />
                <Card english={list[counter].english} russian={list[counter].russian} transcription={list[counter].transcription} ></Card>
                <img src={right_arrow} alt='right arrow' className={styles.arrow} onClick={handleRight} />
            </div>
            <h1>{counter + 1}/{list.length}</h1>
        </body>
    );
}

Carousel.defaultProps = {list: [{"id":"15393","english":"news","transcription":"[njuːs]","russian":"новости","tags":"general","tags_json":"[\"general\"]"},{"id":"15399","english":"mama","transcription":"[mama]","russian":"мама","tags":"general","tags_json":"[\"general\"]"},{"id":"15400","english":"garbage","transcription":"[garba:ge]","russian":"мусор","tags":"основы","tags_json":"[\"u043eu0441u043du043eu0432u044b\"]"},{"id":"15405","english":"house ","transcription":"[haus]","russian":"дом","tags":"Array","tags_json":"null"},{"id":"15406","english":"sun","transcription":"[sʌn]","russian":"солнце","tags":"Array","tags_json":"null"},{"id":"15407","english":"plane","transcription":"[pleɪn]","russian":"самолет","tags":"","tags_json":"[]"},{"id":"15408","english":"butterfly","transcription":"[ˈbʌtəflaɪ]","russian":"бабочка","tags":"","tags_json":"[]"}]};

export default Carousel;
