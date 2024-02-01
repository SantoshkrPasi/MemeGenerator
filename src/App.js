import './App.css';
import { Route ,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App"> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/edit' element={<Edit/>}/>
     </Routes>
    </div>
  );
}

export default App;
