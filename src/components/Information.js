import React, {Component} from "react";
import data from "./../data";
import "./../index.css";

class Information extends Component {
    constructor() {
        super();
        this.state = {
            users: data,
            index: 0
        }
    }

    render() {
        return(
            <div className="card">
                <h1 className="id">{this.props.users[this.props.index].id}/25</h1>
                <h1 className="name">{this.props.users[this.props.index].name.first} {this.props.users[this.props.index].name.last}</h1>
                <h2 className="from">From: {this.props.users[this.props.index].city}, {this.props.users[this.props.index].country} </h2>
                <h2 className="title">Job Title: {this.props.users[this.props.index].title} </h2>
                <h2 className="employer">Employer: {this.props.users[this.props.index].employer} </h2>
            </div>
        )
    }
}

export default Information;