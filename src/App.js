import './App.css';
import 'react-image-lightbox/style.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoList from './Todolist/TodoList';
import AddProduct from './Add Product/AddProduct';
import DisplayProducts from './Display Products/DisplayProducts';
import Navigation from './Navigation/Navigation';
import NoMatch from './No Match/NoMatch';
import WeatherApp from './WeatherApp/Weather';
import OTP from './OTP/OTP';
import DisplayDetail from './WeatherApp/DisplayDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <div>Home</div>
          </Route>
          <Route path="/todo-list">
            <TodoList />
          </Route>
          <Route path="/add-products">
            <AddProduct />
          </Route>
          <Route path="/display-products">
            <DisplayProducts />
          </Route>
          <Route path="/weather-app" exact>
            <WeatherApp />
          </Route>
          <Route path='/otp'>
            <OTP />
          </Route>
          <Route path='/weather-app/location/:locationid' exact>
            <DisplayDetail />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
