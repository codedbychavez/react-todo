// Bulma css

import logo from './logo.svg';
import './App.css';

import Todos from './components/Todos';

const tasks = [
  {
    id: 1,
    name: 'Walk the dog',
    date: new Date()
  },
  {
    id: 2,
    name: 'Watch a Movie',
    date: new Date()
  },
  {
    id: 3,
    name: 'Eat breakfast',
    date: new Date()
  },
  {
    id: 4,
    name: 'Go for a walk',
    date: new Date()
  },
  
]

function App() {
  return (
    <Todos tasks={tasks}></Todos>
  );
}

export default App;
