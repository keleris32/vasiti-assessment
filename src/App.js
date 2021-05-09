import './App.css';
import { Navbar } from './Components';
import { test } from './data';

function App() {
  return (
    <div className="App">
      <Navbar {...test} />
    </div>
  );
}

export default App;
