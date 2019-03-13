import React, { Component } from 'react';
import './newsItem.css';

export default class NewsItem extends Component {
render() {
    let line ;
    if (this.props.post.link ) {
        line = <a href={this.props.post.link} >
                {this.props.post.title} </a> ;
    } else {
        line = <span>{this.props.post.title} </span> ;
    }
    return (
        <div >
        <span className="glyphicon glyphicon-thumbs-up ptr"/>
            {this.props.post.upvotes}
        <span className="newsitem" >{line}
            <span>
                <a href={'#/posts/' + this.props.post.id }>Comments</a>
            </span>
        </span>
        </div>  
        );
    }
} 