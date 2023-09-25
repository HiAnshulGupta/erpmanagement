import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponents from './components/HeaderComponents';
import ProductLIst from './components/ProductLIst';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import AddClients from './components/ClientsCompnents/AddClients'
import AllCLient from './components/ClientsCompnents/AllCLient';
import AddInvoice from './components/ClientsCompnents/InvoiceComponent/AddInvoice';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
          <Route path='/invoice' element={<AddInvoice />}></Route>
            <Route path='/clients' element={<AddClients />}></Route>
            <Route path='/client' element={<AllCLient />}></Route>
            <Route path='/client/:id' element={<AddClients />}></Route>
            <Route exact path='/details' element={<ProductLIst />}></Route>
            <Route path='/register' element={<AddProduct />}></Route>
            <Route path='/:id' element={<AddProduct />}></Route>
          </Routes>

        </div>
        <FooterComponent />

      </BrowserRouter>

    </div>
  );
}

export default App;
