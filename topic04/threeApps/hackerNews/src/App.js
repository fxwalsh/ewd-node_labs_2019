import React, { Component } from 'react';
    import NewsList from './components/newsList';
    import Form from './components/newsForm';

    let testPosts = [
        {   
        title : 'India - Tiger population sees 30% increase.',
        link : 'http://www.bbc.com/news/world-asia-30896028',
        username : 'jbloggs',
        comments : [],
        upvotes : 10
        },
        { 
        title : 'The button that is not.',
        link : 'http://blog.nuclearsecrecy.com/2014/12/15/button-isnt/',
        username : 'notme',
        comments : [],
        upvotes : 12
        },
        { 
        title : 'Google Nears $1B Investment in SpaceX',
        link : null,
        username : 'notme',
        comments : [],
        upvotes : 12
        },
        { 
        title : 'Coinbase Raises $75M from DFJ Growth, USAA, and More',
        link : 'http://blog.coinbase.com/post/108642362357/coinbase-raises-75m-from-dfj-growth-usaa-nyse',
        username : 'psmith',  
        comments : [],
        upvotes : 2
        }
    ] ;

    export default class App extends Component {
        render() {
            return (
              <div className="jumbotron">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 col-md-offset-3" >
                        <a href="/"><h1>Hacker News</h1></a>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-md-9 col-md-offset-1">
                        <NewsList posts={testPosts}  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 col-md-offset-1">
                        <Form />
                    </div>
                </div>
              </div>
            </div>
            );
        }
    }