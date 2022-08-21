 import './App.css';
import Header from './components/Header'
import CreateTask from './components/Task'
import TaskList from './components/TaskList'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (    
    <Router>
      <div className="container">
        <Header/>
        <Routes>
        <Route path="/" exact element={<TaskList/>} />
        <Route path="/create" element={<CreateTask/>} />
       </Routes>
      </div>
    </Router>
   );
}

export default App;
