import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PostCard extends Component {
    render() {
        let { title, body, _id } = this.props.post;
        return (
            <div className="card w-75">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <Link className="btn btn-primary" to={'/post/' + _id}>Read more...</Link>
                </div>
            </div>
        )
    }
}

export default PostCard
