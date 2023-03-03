import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Laptops from './components/Laptops/Laptops';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/laptops' element={<Laptops></Laptops>}></Route>


        <Route path='*' element ={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
