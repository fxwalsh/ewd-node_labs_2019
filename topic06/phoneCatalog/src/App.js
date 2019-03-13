import React , { Component } from 'react';
import Phones from  './Data';
import PhoneList from './components/phoneList'
import SelectControls  from './components/selectControls' ;
import _ from 'lodash';
import './App.css';


class App extends Component {
    state = { search: '', sort: 'name' };

    handleChange = (type, value) => {
        type === 'search' ?
            this.setState( { search: value } ) :
            this.setState( { sort: value } ) ;
    };

    render() {
        let list = Phones.filter( 
            (p) => 
            p.name.toLowerCase().search(this.state.search.toLowerCase()) !== -1 
        );
        let filteredList = _.sortBy(list, this.state.sort) ;


        return (
            <div className="jumbotron">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10" >
                            <h2>Phone Catalogue App <span className="badge"> {filteredList.length}</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <SelectControls  onUserInput={this.handleChange }  
                        filterText={this.state.search} 
                        sort={this.state.sort}/>
                        <PhoneList phones={filteredList} />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
