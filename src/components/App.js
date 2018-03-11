import React, { Component } from 'react';
import './App.css';
import News from './News/News'
import SideNews from './News/SideNews'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      news1: {
        query: 'country=us',
        category: 'top-headlines'
      },
      news2: {
        query: 'sources=bbc-news',
        category: 'top-headlines'
      },
      news3: {
        query: 'country=us&category=business',
        category: 'top-headlines'
      }
    }

  }

  render() {
    return (
      <div className="container-fluid">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>

        <div className="row">
          <div className="col m8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>

          <div className="col m4">
            <SideNews news = {this.state.news3}/>
          </div>
        </div>


      </div>

    );
  }
}

export default App;
