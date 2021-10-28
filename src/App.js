
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './home';
import About from './About';
import Education from './Education';
import Skill from './Skill';
import Contact from './Contact';
function App() {
  return (
    <Router>
    <div className="App">
    
      <Navbar/>
      
      <Route exact path="/PageResume/">
        <Home/>
      </Route>
      <Route exact path="/PageResume/About">
        <About/>
      </Route>
      <Route exact path="/PageResume/education">
        <Education/>
      </Route>
      <Route exact path="/PageResume/skill">
        <Skill/>
      </Route>
      <Route exact path="/PageResume/contact">
        <Contact/>
      </Route>


      
      
      
      
    </div>
    </Router>
    
  );
}

export default App;
