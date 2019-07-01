import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SecretCode from './components/SecretCode';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>JavaScript technologies homework</h1>
          <h2>Ceasar code</h2>
        </header>

        <div>
          <Switch>
            <Route path="/" exact component={SecretCode} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
