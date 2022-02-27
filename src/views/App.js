import './App.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import SectionContact from '../components/SectionContact';
import Home from './Home';
import Cart from '../components/Cart';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Checkout from '../components/Checkout';
import Account from '../components/Account';
function App() {
  return (
    <BrowserRouter>
      <div className="App"> 
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/contact" element={<SectionContact/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
  );
}

export default App;
