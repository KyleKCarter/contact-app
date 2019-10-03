import React, {Component} from "react";
import data from "./../data";
import "./../index.css";

class FavoriteMovie extends Component {
    constructor() {
        super();
        this.state = {
            users: data,
            index: 0
        }
    }

    render() {
        return(
            <div>
                <h2 className="favoriteMovie">Favorite Movie: 
                    <h3>1. {this.props.users[this.props.index].favoriteMovies[0]}</h3>
                    <h3>2. {this.props.users[this.props.index].favoriteMovies[1]}</h3>
                    <h3>3. {this.props.users[this.props.index].favoriteMovies[2]}</h3>
                </h2>
            </div>
        )
    }
}

export default FavoriteMovie;