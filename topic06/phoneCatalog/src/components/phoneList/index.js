import React, { Component } from 'react';
import Phone from '../phone'
import './phoneList.css'

export default class PhoneList extends Component {
    render() {
      let displayedPhones =  this.props.phones.map( 
          (phone) => <Phone key={phone.id} phone={phone } />
       ) ; 
      return (
        <div className="col-md-10">
          <ul className="phones">
              {displayedPhones}
          </ul>
        </div>
      ) ;
  }
}