import './App.css';
import Header from './Pages/Header/Header';
// import About from './Pages/About/About';
// import Banner from './Pages/Banner/Banner';
 import Service from './Pages/Service/Service';
// import Skils from './Pages/Skils/Skils';
import Contact from './Pages/Contact/Contact';
import Project from './Pages/Project/Project';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import SingleDetails from './Pages/SingleDetails/SingleDetails';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
         <Switch>
           <Route exact path="/">
          <Home></Home>
           </Route>
           <Route  path="/home">
          <Home></Home>
           </Route>
           <Route  path="/project">
           <Project></Project>
           </Route>
           <Route  path="/service">
           <Service></Service>
           </Route>
           <Route  path="/contact">
           <Contact></Contact>
           </Route>
           <Route  path="/blog">
           <Blog></Blog>
           </Route>
           <Route  path="/singleDetails/:id">
           <SingleDetails></SingleDetails>
           </Route>
        </Switch>
        </BrowserRouter>
      {/* <Banner></Banner>
      <About></About>
      <Skils></Skils>
      <Project></Project>
      <Contact></Contact>
      <Service></Service> */}

      
    </div>
  );
}

export default App;
