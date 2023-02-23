import './App.css';
import SculpList from './components/SculpList';
import Sculptures from './contexts/Sculptures';

function App() {
  return (
    <div className="App">
      <Sculptures>
        <SculpList />
      </Sculptures>
    </div>
  );
}

export default App;
