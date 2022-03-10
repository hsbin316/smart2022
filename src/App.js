import dog from './dog.jpg';
import './App.css';

function App() {
  const h1Element = <h1>H1 제목 태그 입니다.</h1>;
  const imgElement = <img src={dog} className="App-logo" alt="dog" />;

  const testData = [
    {
      text : "정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다.",
      imgUrl: "adfasdfasdfsdfsaf",
    },{
      text: "헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다.",
      imgUrl: "adfasdfasdfadsf"
    },{
      text: "국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며, 국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다.",
      imgUrl: "asdfasdfadfsdf"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        { h1Element }
        { imgElement }
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
