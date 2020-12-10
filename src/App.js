import './App.css';
import { Counter } from './components/Counter';
import { CounterDisplay } from './components/CounterDisplay';

function App() {
  return (
    <div className="container">
      <Counter /><br />
      <CounterDisplay />
    </div>
  );
}

export default App;
