import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Faq from './Components/Faq';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './Components/Nav';


function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/faq' component={Faq}/>
      </Router>
    </div>
  );
}

export default App;
