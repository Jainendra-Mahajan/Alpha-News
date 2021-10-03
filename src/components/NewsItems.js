import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title , description , urlToImage , newsUrl , author , date , source } = this.props;
        return (
            <div>
                    <div className="card">
                    <img src={!urlToImage?"https://images.cnbctv18.com/wp-content/uploads/2019/04/shutterstock_758302231-1-1000x573.jpg" : urlToImage} alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex:'1'}}>
                        {source}
                    </span>
                    
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                    <p className="card-text my-3"><small className="text-muted">By {!author?"Unknown":author} On {new Date(date).toGMTString()}</small></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
