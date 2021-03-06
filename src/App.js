import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {

  render() {
    return (

      <div className="App">
        <header>
          <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to='/' className="nav-link">BlocJams <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link to='/library' className="nav-link">Library</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }


}

export default App;
