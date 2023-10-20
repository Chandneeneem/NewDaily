import React, { Component } from 'react'

export class Newsitem extends Component {


    render() {

        let { title, discription, imageUrl, newsUrl, author, date ,source} = this.props;//distructure
        return (
            <div className='my-3'>

                <div className="card">
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'80%', zIndex:'1'}}>
                            {source} 
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/09/05/600x338/INDIA-G20-POLITICS-DIPLOMACY-0_1693888060381_1693888136132.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title">{title}..</h5>

                      
                        <p className="card-text">{discription}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknow" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">read more</a>
                    </div>
                </div>


            </div>
        )
    }
}

export default Newsitem
