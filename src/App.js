import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Table from './components/Table';
import styles from './styles.css';
import icon from './images/icon.png';
export { word_list };


const word_list = [{"id":"15393","english":"news","transcription":"[njuːs]","russian":"новости","tags":"general","tags_json":"[\"general\"]"},{"id":"15399","english":"mama","transcription":"[mama]","russian":"мама","tags":"general","tags_json":"[\"general\"]"},{"id":"15400","english":"garbage","transcription":"[garba:ge]","russian":"мусор","tags":"основы","tags_json":"[\"u043eu0441u043du043eu0432u044b\"]"},{"id":"15405","english":"house ","transcription":"[haus]","russian":"дом","tags":"Array","tags_json":"null"},{"id":"15406","english":"sun","transcription":"[sʌn]","russian":"солнце","tags":"Array","tags_json":"null"},{"id":"15407","english":"plane","transcription":"[pleɪn]","russian":"самолет","tags":"","tags_json":"[]"},{"id":"15408","english":"butterfly","transcription":"[ˈbʌtəflaɪ]","russian":"бабочка","tags":"","tags_json":"[]"}]


function App() {
  return (
    <div className="App">
      <header>
        <img src={icon} alt="icon" className="icons" />
        <a href=''>Главная</a>
        <a href=''>Карточки</a>
        <a href=''>Таблица</a>
        <a href=''>Подробнее</a>
      </header>
      <body>
        <h1>Изучение иностранных слов</h1>
        <div>
          <Card english={word_list[0].english} russian={word_list[0].russian} transcription={word_list[0].transcription} tags={word_list[0].tags}></Card>
        </div>
        <h1>Таблица слов</h1>
        <Table></Table>
        <br></br>
      </body>
      <footer>
        <a href=''>Главная</a>
        <a href=''>Карточки</a>
        <a href=''>Таблица</a>
        <a href=''>Подробнее</a>
      </footer>
    </div>
  );
}

export default App;
