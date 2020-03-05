import React, { Component } from "react";
import Axios from "axios";
import PostModal from "../component/PostModal";
import PostTable from "../component/PostTable";

export default class Dashboard extends Component {
  state = {
    posts: [],
    show: false,
    idToBeUpdated: null
  };
  async componentDidMount() {
    try {
      let { data: posts } = await Axios.get("http://localhost:5000/api/");
      this.setState({
        posts
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleClose = () => this.setState({ show: false });
  handleShow = id =>
    this.setState({
      show: true,
      idToBeUpdated: id
    });

  render() {
    const { posts, show, idToBeUpdated } = this.state;
    return (
      <div>
        <h1>Dashboard</h1>
        <PostTable posts={posts} handleShow={this.handleShow} />
        {show ? (
          <PostModal
            show={show}
            handleClose={this.handleClose}
            idToBeUpdated={idToBeUpdated}
          />
        ) : (
          ""
        )}
        {/*<PostModal show ={show} handleClose={this.handleClose} idToBeUpdated={idToBeUpdated} />*/}
      </div>
    );
  }
}
