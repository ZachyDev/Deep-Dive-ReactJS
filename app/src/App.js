import './App.css';
import StudentDetails from './contexts/StudentDetails';
import Student from './components/Student';

function App() {
  return (
    <div className="App">
      <StudentDetails>
        <Student />
      </StudentDetails>
    </div>
  );
}

export default App;
