import React, { Component } from 'react';
import NewSingle from './NewSingle'

class News extends Component{

    constructor(props){
        super(props);
        this.state = {
            news : []
        }
    }

    componentDidMount(){

        const url = `https://newsapi.org/v2/${this.props.news.category}?${this.props.news.query}&apiKey=4334b0be52084e67a01a94ddc04ec14a`;

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    news:res.articles
                });
                console.log(res);
            })
            .catch(error => console.log(error));

    }

    renderItems(){
        return this.state.news.map(item => (
            <NewSingle key={item.url} item={item} />
        ))
    }

    render(){
        return (
            <div className="row" >
                {this.renderItems()}
            </div>
        );
    }
}

export default News;