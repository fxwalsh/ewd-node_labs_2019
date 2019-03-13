import React , { Component } from 'react';
import Phones from  './Data';
import PhoneList from './components/phoneList'
import SelectControls  from './components/selectControls' ;

class App extends Component {
    render() {
        let list = Phones ;
        return (
            <div className="jumbotron">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10" >
                            <h2>Phone Catalogue App <span className="badge"> {list.length}</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <SelectControls />
                        <PhoneList phones={list} />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
