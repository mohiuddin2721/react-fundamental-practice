import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/menubar/Menubar';
import Blog from './components/blog/Blog';
import Mobile from './components/Mobile/Mobile';
import AllProducts from './components/allProducts/AllProducts';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Menubar></Menubar>
      <Mobile></Mobile>
      <AllProducts></AllProducts>
      <Blog></Blog>
    </div>
  );
}


export default App;
