import React, {Component} from "react";
import "./../index.css";

//components
import data from "../data";
import Information from "./Information";
import FavoriteMovie from "./FavoriteMovie";

class UserNavigation extends Component {
    constructor() {
        super();
        this.state = {
            users: data,
            index: 0
        }
    }

    nextCard = () => {
        if (this.state.index === 24) {
            this.setState({ index: 0});
        } else {
            this.setState({ index: this.state.index + 1 })
        }
    }

    previousCard = () => {
        if (this.state.index === 0) {
            this.setState({ index: 24});
        } else {
            this.setState({ index: this.state.index - 1 })
        }
    }

    render() {
        console.log(this.state.index)
        console.log(this.state.users)
        return(
            <div className="content">
                <div className="infoCard">
                    <Information users={this.state.users} index={this.state.index} />
                    <FavoriteMovie users={this.state.users} index={this.state.index} />
                </div>
                <div className="navBar">
                    <div className="previous" onClick={this.previousCard}>{'<'} Previous</div>
                    <div className="editBar">
                        <button className="edit">Edit</button>
                        <button className="delete">Delete</button>
                        <button className="new">New</button>
                    </div>
                    <div className="next" onClick={this.nextCard}>Next {'>'}</div>
                </div>
            </div> 
        )
    }
}

export default UserNavigation;