// import logo from './logo.svg';
import './App.css';
import QsAndAns from './components/QsAndAns/QsAndAns';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <h1>Two Wheeler Heaven</h1>
      <h4 className='sub-title'>Choose Your Best One!</h4>

      <Shop></Shop>
      <QsAndAns></QsAndAns>
    </div>
  );
}

export default App;
