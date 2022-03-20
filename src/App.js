import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/menubar/Menubar';
import Blog from './components/blog/Blog';
import Mobile from './components/Mobile/Mobile';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Mobile></Mobile>
      <Blog></Blog>
    </div>
  );
}


export default App;
