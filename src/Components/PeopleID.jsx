import React, { Component } from 'react'

export class PeopleID extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PersonCard: {}
        }

    }
    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(obj => this.setState({ PersonCard: obj }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>


                <div className="card" key={this.state.PersonCard.id}>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.PersonCard.name}</h5>
                        <p className="card-text">{'age: '}{this.state.PersonCard.age}</p>
        <p className="card-text">{'gender: '}  {this.state.PersonCard.gender}</p>
                        <p className="card-text"> {'eye color: '} {this.state.PersonCard.eye_color}</p>
                        <p className="card-text"> {'hair color: '} {this.state.PersonCard.hair_color}</p>
                    </div>
                </div>


            </>
        )
    }
}
export default PeopleID