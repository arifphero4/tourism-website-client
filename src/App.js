import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import Home from './conponents/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     
    </div>
  );
}

export default App;
