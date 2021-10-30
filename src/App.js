import { createContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import DetailsService from './components/Home/DetailsService/DetailsService';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRouter/PrivateRouter';
import Register from './components/Login/Register/Register';
import MakeTours from './components/MakeTours/MakeTours';
import ManageTours from './components/ManageTours/ManageTours';
import NotPage from './components/NotPage/NotPage';
import Tours from './components/Tours/Tours';
import AuthProvider from './contexts/AuthProvider';
import useFetch from './hooks/useFetch';

export const useServices = createContext();
function App() {
  const [services] = useFetch()

  return (
    <div className="App">
      <AuthProvider>
        <useServices.Provider value={[services]}>
          <BrowserRouter>
           <Header/>
            <Switch>
              <Route exact path="/">    
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home />              
              </Route>
              <PrivateRoute exact path="/details/:id">
                <DetailsService />               
              </PrivateRoute>
              <Route path="/login">             
                <Login />                
              </Route>
              <Route path="/register">
                <Register />               
              </Route>
              <Route path="/tours">
                <Tours></Tours>
              </Route>
              <Route path="/tourPlans">
                <MakeTours></MakeTours>
              </Route>
              <Route path="/manageTours">
                <ManageTours></ManageTours>
              </Route>
              
              
              <Route path="*">
                <NotPage></NotPage>
              </Route>
            </Switch>
            <Footer/>
          </BrowserRouter>
        </useServices.Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
