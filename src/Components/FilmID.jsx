import React, { Component } from 'react'

export class FilmID extends Component {
    constructor(props) {
        super(props)
        this.state = {
            FilmCard: {}
        }

    }
    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(obj => this.setState({ FilmCard: obj }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>


                <div className="card" key={this.state.FilmCard.id}>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.FilmCard.title}</h5>
                        <p className="card-text">{this.state.FilmCard.director}</p>
                        <p className="card-text">{this.state.FilmCard.producer}</p>
                    </div>
                </div>


            </>
        )
    }
}
export default FilmID