import React from 'react';

const NewSingle = ({ item }) => (

        
            <div className="col l4 m4 s4">
                <div className="card">
                    <div className="card-image">
                        <img src={item.urlToImage} />
                        <span className="card-title">{item.title.substring(0,10)}...</span>
                    </div>
                    <div className="card-content">
                        <p>{item.description}</p>
                    </div>
                    <div className="card-action">
                        <a href={item.url} target="_blank">Details</a>
                    </div>
                </div>
            </div>
         
);

export default NewSingle;