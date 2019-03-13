import React, { Component } from 'react';

export default class SelectControls extends Component {
    render() {
        return (
                <div className="col-md-10">
                        <input type="text" placeholder="Search" />
                        <span> Sort by: </span>
                        <select id="sort" >
                                <option value="name">Alphabetical</option>
                                <option value="age">Newest</option>
                        </select>
                </div>
        );
    }
}