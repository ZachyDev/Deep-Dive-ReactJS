import './App.css';
import StaffContextProvider from './contexts/StaffContext';
import Staff from './components/Staff';

function App() {
  return (
    <div className="App">
     <StaffContextProvider>
      <Staff />
     </StaffContextProvider>
    </div>
  );
}

export default App;
