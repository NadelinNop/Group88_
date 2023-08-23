import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Signin from './pages/Signin';
import History from './pages/History';
import Signup from './pages/Signup';
import UserProfile from './pages/userProfile';
import Navbar from './components/navbar';
import Footer from './components/footer';


function App() {
  return (
    <div className="app">
      
   <BrowserRouter>
    <Navbar/>
    
    <Routes>
    <Route path ='/' element ={<Landing/>}></Route>
      <Route path ='/home' element ={<Home/>}></Route>
      <Route path ='/history' element ={<History/>}></Route>
      <Route path ='/sigin'  element ={<Signin/>}></Route>
      <Route path ='/signup'  element ={<Signup/>}></Route>
      <Route path ='/profile'  element ={<UserProfile/>}></Route>
    </Routes>
    
   <Footer/>
    </BrowserRouter>
       
    
   
    </div>
  );
}

export default App;
