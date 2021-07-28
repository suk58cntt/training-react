import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Es6 from '../es6/Es6';
import ReactJs from '../reactJs/ReactJs';
import Redux from '../redux/Redux';
import Todo from '../todo/Todo';
import './Router.css';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-ex1-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">
              REACT JS
            </Link>
          </div>

          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link to="/es6">ES6</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/redux">Redux</Link>
              </li>
              <li>
                <Link to="/saga">Saga</Link>
              </li>
              <li>
                <Link to="/toolkit">ToolKit</Link>
              </li>
            </ul>
            {/* <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </form> */}
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="a">Link</a>
              </li>
              <li className="dropdown">
                <a href="a" className="dropdown-toggle" data-toggle="dropdown">
                  Dropdown <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="a">Action</a>
                  </li>
                  <li>
                    <a href="a">Another action</a>
                  </li>
                  <li>
                    <a href="a">Something else here</a>
                  </li>
                  <li>
                    <a href="a">Separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid center">
          <div className="row">
            <div className="col-sm-2 gray"></div>
            <div className="col-sm-8">
              <Switch>
                <Route path="/es6">
                  <Es6 />
                </Route>
                <Route path="/todo">
                  <Todo />
                </Route>
                <Route path="/redux">
                  <Redux />
                </Route>
                <Route path="/saga">
                  <Todo />
                </Route>
                <Route path="/toolkit">
                  <Todo />
                </Route>
                <Route path="/">
                  <ReactJs />
                </Route>
              </Switch>
            </div>
            <div className="col-sm-2 gray"></div>
          </div>
        </div>
      </BrowserRouter>
      <footer className="container-fluid text-center">
        <p>Footer Text</p>
      </footer>
    </div>
  );
};

export default Router;
