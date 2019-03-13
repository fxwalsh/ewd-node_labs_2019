import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import '../node_modules/bootstrap/dist/css/bootstrap.css';
    import PhoneCatalogueApp from './App';

    import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
    import PhoneDetail from  './components/phoneDetails';

    const Router = (props) => {
        return (
            <BrowserRouter>
              <div className="jumbotron">
               <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-10" >
                         <h2>Phone Catalogue App</h2>
                    </div>
                  </div>
                </div>
                <Switch>
                    <Route path='/phones/:id' component={ PhoneDetail } />
                    <Route exact path='/' component={ PhoneCatalogueApp } />
                    <Redirect from='*' to='/' />
                </Switch>
              </div>
            </BrowserRouter>
        );
    };
    ReactDOM.render((
        <Router/> 
    ), document.getElementById('root')) ;
