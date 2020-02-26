import React, { Component } from 'react'
import 'es6-promise';
import 'isomorphic-fetch';
import { Link } from 'react-router-dom';

export class People extends Component {

    state = {
        people: []
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/People")
            .then(res => res.json())
            .then(peopleList => this.setState({people: peopleList}))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <>
                {this.state.people.map((person) => {

                    return (<div className="card" key={person.id}>
                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <p className="card-text">{person.age}</p>
                            <p className="card-text">{person.gender}</p>
                            <Link to={`/people/${person.id}`}><button type="button">Learn More</button></Link>
                        </div>
                    </div>
                    )
                })}
            </>
        )
    }
}

export default People
