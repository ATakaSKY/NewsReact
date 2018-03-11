import React, { Component } from 'react';
import SideSingle from './SideSingle'
import axios from 'axios';

class SideNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.category}?${this.props.news.query}&apiKey=4334b0be52084e67a01a94ddc04ec14a`;
        
        axios.get(url)
            .then(response =>  {
                this.setState({
                    news:response.data.articles 
                });
                console.log(response)               ;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    renderItems() {
        return this.state.news.map(item => (
            <SideSingle key={item.url} item={item} />
        ))
    }

    render() {
        return (
            <div className="row" >
                {this.renderItems()}
            </div>
        );
    }
}

export default SideNews;