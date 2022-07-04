import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AllItem from './Pages/Home/AllItem/AllItem';

function App() {
  return (
    <div >
     <Routes>
      <Route path='/' element={<Home /> } ></Route>
      <Route path='/allItem' element={<AllItem /> }>
      </Route>
      </Routes> 
    </div>
  );
}

export default App;
