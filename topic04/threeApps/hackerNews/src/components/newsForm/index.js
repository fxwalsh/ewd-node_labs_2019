import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
        <form style={{marginTop: '30px'}}>
           <h3>Add a news item</h3>
           <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Title"></input>
           </div>
           <div className="form-group">
               <input type="text"
                 className="form-control"
                placeholder="Link"></input>
           </div>
           <button type="submit" className="btn btn-primary">Add</button>
        </form>
        );
    }
}
