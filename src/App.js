import './App.css';
import Header from './Pages/Header/Header';
import About from './Pages/About/About';
import Banner from './Pages/Banner/Banner';
import Service from './Pages/Service/Service';
import Skils from './Pages/Skils/Skils';
import Contact from './Pages/Contact/Contact';
import Project from './Pages/Project/Project';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Skils></Skils>
      <Project></Project>
      <Contact></Contact>
      <Service></Service>

      
    </div>
  );
}

export default App;
