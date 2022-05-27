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
   <Route exact path={"/"}components={Home}/>
    <Route exact path={"/department"}components={Department}/>
      <Route exact path={"/doctors"}components={Doctors}/>
      <Route exact path={"/about"}components={About}/>
      <Route exact path={"/contact"}components={Contact}/>
      <Route exact path={"/danger"}components={Auth}/>
      
   </Switch>
    <Footer/>  
   </>
   
  
  );
}

export default App;

