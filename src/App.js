import logo from './logo.svg';
import './App.css';

function App() {
  const personName = ['Polas', 'Ajay', 'Rashed', 'Dipok'];
  const job = ['Student', 'NTARCA Teacher', 'Businessman', 'Jobless'];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Person></Person>
        

      </header>
    </div>
  );
}

function Person(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <h5>Profession: {props.job}</h5>
    </div>
  )
}

export default App;
