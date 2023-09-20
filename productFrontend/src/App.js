import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponents from './components/HeaderComponents';
import ProductLIst from './components/ProductLIst';
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div >
      <BrowserRouter>
        <HeaderComponents />
        <div>
          <Routes>

            <Route exact path='/' element={<ProductLIst />}></Route>
            <Route  path='/register' element={<AddProduct />}></Route>
            <Route  path='/:id' element={<AddProduct />}></Route>
          </Routes>

        </div>
        <FooterComponent />

      </BrowserRouter>

    </div>
  );
}

export default App;
