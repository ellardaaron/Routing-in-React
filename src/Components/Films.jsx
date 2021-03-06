import React, { Component } from 'react'
import 'es6-promise';
import 'isomorphic-fetch';
import { Link } from 'react-router-dom';

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
                            <Link to={`/films/${film.id}`}><button type="button">Learn More</button></Link>
                        </div>
                    </div>
                    )
                })}
            </>
        )
    }
}

export default Films