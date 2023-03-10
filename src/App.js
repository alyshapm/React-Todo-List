import './App.css';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import { Alysha } from './components/Alysha';

function App() {
  return (
    <div className="App">
      <Title />
      <Alysha />
      <TodoList/>
      
    </div>
  );
}

export default App;