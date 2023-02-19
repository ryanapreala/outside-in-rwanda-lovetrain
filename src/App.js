import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import the components that will be rendered
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Hero />
        <div className="container">
          <Switch>
            <Route exact path="/order" component={OrderForm} />
            <Route exact path="/" component={ProductList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
