
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import HomeComponent from './Components/Routes/Home/HomeComponent';
import CalculatorComponent from './Components/Routes/Calculator/CalculatorComponent';
import CartoonComponent from './Components/Routes/Cartoon/CartoonComponent';


function App() {
  return (
    <Router>
      <div className='App'>
        
        <ul>
          <li>
            <Link to='/Calculator' className='link'>Calculator</Link>
          </li>
          <li>
            <Link to='/Cartoon' className='link'>Cartoon</Link>
          </li>
          <li>
            <Link to='/Home' className='link'>Home</Link>
          </li>
         
          
        </ul>
        <Routes>
          <Route exact path='/Calculator' element={<CalculatorComponent/>}></Route>
          <Route exact path='/Cartoon' element={<CartoonComponent/>}></Route>
          <Route exact path='/Home' element={<HomeComponent/>}></Route>


         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
