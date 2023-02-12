import './App.css';
import Data from './contexts/Data';
import SculptureInfo from './components/SculptureInfo';

function App() {
  return (
    <div className="App">
      <Data>
        <SculptureInfo />
      </Data>
    </div>
  );
}

export default App;
