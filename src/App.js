import './App.css';
import Menu from './components/Menu';
import styles from './styles.css';
export { word_list };


const word_list = [{"id":"15393","english":"news","transcription":"[njuːs]","russian":"новости","tags":"general","tags_json":"[\"general\"]"},{"id":"15399","english":"mama","transcription":"[mama]","russian":"мама","tags":"general","tags_json":"[\"general\"]"},{"id":"15400","english":"garbage","transcription":"[garba:ge]","russian":"мусор","tags":"основы","tags_json":"[\"u043eu0441u043du043eu0432u044b\"]"},{"id":"15405","english":"house ","transcription":"[haus]","russian":"дом","tags":"Array","tags_json":"null"},{"id":"15406","english":"sun","transcription":"[sʌn]","russian":"солнце","tags":"Array","tags_json":"null"},{"id":"15407","english":"plane","transcription":"[pleɪn]","russian":"самолет","tags":"","tags_json":"[]"},{"id":"15408","english":"butterfly","transcription":"[ˈbʌtəflaɪ]","russian":"бабочка","tags":"","tags_json":"[]"}]


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <footer></footer>
    </div>
  );
}

export default App;
