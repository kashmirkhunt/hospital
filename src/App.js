import logo from './logo.svg';
import './App.css';
import Home from './Container/Home/Home';
import Department from './Components/Department/Department';
import Doctors from './Components/Doctors/Doctors';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Auth from './Container/Auth/Auth';
import Header from './Components/Header/Header';
import { Switch,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <>
    <Header/>
   <Switch>
   <Route exact path={"/home"} component={Home}/>
    <Route exact path={"/department"} component={Department}/>
      <Route exact path={"/doctors"} component={Doctors}/>
      <Route exact path={"/about"} component={About}/>
      <Route exact path={"/contact"} component={Contact}/>
      <Route exact path={"/danger"} component={Auth}/>
      
   </Switch>
    <Footer/>  
   </>
   
  
  );
}

export default App;

