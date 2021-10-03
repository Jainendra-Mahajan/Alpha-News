import React, { Component } from 'react'
import loader from './loader.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center container my-3" >
                <img src={loader} alt="Loader"/>
            </div>
        )
    }
}

export default Spinner
