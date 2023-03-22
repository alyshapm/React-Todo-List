import './App.css';
import { Title } from './components/Title';
import { TodoList } from './components/TodoList';
import { Alysha } from './components/Alysha';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Reset } from './components/Reset';
import { Dashboard } from './components/Dashboard';
import { Logout } from './components/Logout';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* auth */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/todo" element={<TodoList />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
      </Router>

      {/* <Title />
      <Alysha />
      <TodoList/> */}
    </div>
  );
}

export default App;