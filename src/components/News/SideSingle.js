import React from 'react';

const SideSingle = ({ item }) => (
    <ul className="collection">
        <li className="collection-item avatar">
            <img src={item.urlToImage} alt="News" className="circle" />
            <span className="title">{item.title.substring(0,20)}...</span>
            <a href={item.url} target="_blank" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
    </ul>
);

export default SideSingle;