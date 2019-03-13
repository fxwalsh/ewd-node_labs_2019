import React, { Component } from 'react';
import './phone.css';
import { Link } from 'react-router-dom';

export default class Phone extends Component {
    render() {
            let url = process.env.PUBLIC_URL + '/phoneSpecs/' + this.props.phone.imageUrl;
            return (
                <li className="thumbnail phone_item">
                    <Link to={'/phones/' + this.props.phone.id} className="thumb" >
                            <img src={url} alt={this.props.phone.name} /> 
                    </Link>
                <Link to={'/phones/' + this.props.phone.id}> {this.props.phone.name}</Link>
                <p>{this.props.phone.snippet}</p>
                </li>
        ) ;
    }
}