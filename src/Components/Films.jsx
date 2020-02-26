import React, { Component } from 'react'
import 'es6-promise';
import 'isomorphic-fetch';

export class Films extends Component {

    state = {
        films: []
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(filmList => this.setState({ films: filmList }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            
            <>
                {this.state.films.map((film) => {

                    return (<div className="card" key={film.id}>
                        <div className="card-body">
                            <h5 className="card-title">{film.title}</h5>
                            <p className="card-text">{film.description}</p>
                        </div>
                    </div>
                    )
                })}
            </>
        )
    }
}

export default Films