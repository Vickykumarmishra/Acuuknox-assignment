import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import ColorList from './components/ColorList';
function App() {
  return (
    <div className="App">
      <Header></Header>
      
      

 <BrowserRouter>
 <Routes>
  <Route path='/' element={<About></About>}></Route>
  <Route path='/search' element={<ColorList></ColorList>}></Route>
 </Routes>
 </BrowserRouter>
 <Footer></Footer>

    </div>
  );
}

export default App;
