import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Screens/Home';
import Portfolio from './Screens/Portfolio';
import Pricing from './Screens/Pricing';
import Contact from './Screens/Contact';
import About from './Screens/About';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main"> 
          <div className='content'>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/pricing">
                    <Pricing />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
            <Footer />
          </div>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
