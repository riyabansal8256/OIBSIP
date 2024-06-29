
import './App.css';
import Header from './components/Header.jsx';
import ToDoForm from './components/ToDoForm';
import Todos from './components/Todos.jsx';
function App() {
  return (
    <div >
      <Header />
      <ToDoForm />
      <Todos />
    </div>
  );
}

export default App;
