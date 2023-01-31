import './App.css';
import User from './components/Hooks/User';
import ThemeColors from './contexts/ThemeColors';
function App() {
  return (
    <div className="App">
    <ThemeColors>
      <User />
    </ThemeColors>
    </div>
  );
}

export default App;
