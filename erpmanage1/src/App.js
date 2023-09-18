
import './App.css';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import ShowProduct from './components/ShowProduct';
import Code from './components/Code';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Code/>}></Route>
          <Route  path='/register' element={<AddProduct/>}></Route>
          <Route  path='/all' element={<ShowProduct/>}></Route>
         
        </Routes>

      </BrowserRouter>



    </div>
  );
}

export default App;
