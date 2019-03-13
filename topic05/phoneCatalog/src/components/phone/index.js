import React, { Component } from 'react';
import './phone.css';

export default class Phone extends Component {
    render() {
            let url = 'phoneSpecs/' + this.props.phone.imageUrl;
            return (
                <li className="thumbnail phone_item">
                    <a href={'/phones/' + this.props.phone.id} className="thumb" >
                            <img src={url} alt={this.props.phone.name} /> 
                    </a>
                <a href={'/phones/' + this.props.phone.id}> {this.props.phone.name}</a>
                <p>{this.props.phone.snippet}</p>
                </li>
        ) ;
    }
}